import { Context } from "npm:hono";

// GitHub API helper to update a file
export async function updateGitHubFile(
  owner: string,
  repo: string,
  path: string,
  content: string,
  message: string,
  token: string
) {
  // First, get the current file to get its SHA
  const getResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!getResponse.ok) {
    throw new Error(`Failed to get file: ${await getResponse.text()}`);
  }

  const fileData = await getResponse.json();
  const sha = fileData.sha;

  // Now update the file
  const updateResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: btoa(content), // Base64 encode the content
        sha,
      }),
    }
  );

  if (!updateResponse.ok) {
    throw new Error(`Failed to update file: ${await updateResponse.text()}`);
  }

  return await updateResponse.json();
}

export async function handleGitHubUpdate(c: Context) {
  try {
    const { files } = await c.req.json();
    const token = Deno.env.get("GITHUB_ACCESS_TOKEN");

    if (!token) {
      return c.json({ error: "GITHUB_ACCESS_TOKEN not found" }, 500);
    }

    const owner = "koroldm-droid";
    const repo = "superGRCwebsite";

    const results = [];

    for (const file of files) {
      try {
        const result = await updateGitHubFile(
          owner,
          repo,
          file.path,
          file.content,
          file.message || "Update file via API",
          token
        );
        results.push({ path: file.path, success: true, result });
      } catch (error) {
        results.push({
          path: file.path,
          success: false,
          error: error.message,
        });
      }
    }

    return c.json({ results });
  } catch (error) {
    console.error("Error updating GitHub files:", error);
    return c.json({ error: error.message }, 500);
  }
}

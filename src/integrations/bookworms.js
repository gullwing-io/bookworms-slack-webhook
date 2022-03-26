import { loadBookmarks, generateBookmarks } from "bookworms";

let bookmarks = "";

const init = async (path) => {
  const { body } = await loadBookmarks.fetchBookmarkConfig(path);
  bookmarks = body;
};

// generating the markdown only for the top level folder requested in the slash command
const generateBookmarkMarkdown = (folder) => {
  const requestedFolder = findBookMarkFolder(folder, bookmarks.folders);
  if (requestedFolder) {
    const selectedBookmarks = {
      folders: [requestedFolder],
    };
    const [browser, readme] =
      generateBookmarks.generateImportBookmarkMarkup(selectedBookmarks);
    // taking the readme as this is markdown
    return readme.body;
  } else {
    return `Sorry ${folder} could not be found, use \`/bookmarks all\` for a list of available bookmarks    `;
  }
};

// used for showing a dynamic list of available top level folders
const listOfBookmarksMarkDown = () => {
  const commands = bookmarks.folders.map((folder) => {
    return `\`/bookmarks ${folder.label.toLowerCase()}\``;
  });
  // adding in new line for formatting in Slack response
  const commandsMarkdown = `
${commands.join("\r\n")}
    `;
  return `Bookmarks are seperated into different domains, to get the specific bookmarks you can enter the following commands
    ${commandsMarkdown}
    `;
};

// returning the markdown of the requested top level folder
const findBookMarkFolder = (name, folders) => {
  return folders.find((folder) => {
    if (folder.label.toLowerCase() === name) {
      return folder;
    }
  });
};

const getBookmarks = (folder) => generateBookmarkMarkdown(folder);

export { init, getBookmarks, listOfBookmarksMarkDown, findBookMarkFolder };

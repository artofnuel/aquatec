// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure = (S) =>
//   S.list()
//     .title("Blog")
//     .items([
//       S.documentTypeListItem("post").title("Posts"),
//       S.documentTypeListItem("category").title("Categories"),
//       S.documentTypeListItem("author").title("Authors"),
//       S.documentTypeListItem("blogPost").title("Blog Post"),
//       S.divider(),
//       ...S.documentTypeListItems().filter(
//         (item) =>
//           item.getId() &&
//           !["post", "category", "author", "blogPost"].includes(item.getId()),
//       ),
//     ]);

export const structure = (S) =>
  S.list().title("Blog").items(
    S.documentTypeListItems(), // <= example code goes here
  );

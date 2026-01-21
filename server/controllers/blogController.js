export const addBlog = async (req, res) => {
  try {
    const { title, subtitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // check if all field are present
    if (
      !title ||
      !description ||
      !category ||
      !subtitle ||
      isPublished ||
      !imageFile
    ) {
      return res.json({ success: false, message: "All fields are required" });
    }
  } catch (error) {}
};

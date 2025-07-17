const Project = require('../models/projectModel');

class ProjectService {
  static async getAllProjects(companyName) {
    return await Project.find({ companyName }).populate('managers createdBy');
  }

  static async createProject(data, companyName, createdBy) {
    const project = new Project({ ...data, companyName, createdBy });
    return await project.save();
  }

  static async updateProject(id, data, companyName) {
    return await Project.findOneAndUpdate(
      { _id: id, companyName },
      { $set: data },
      { new: true }
    );
  }

  static async deleteProject(id, companyName) {
    return await Project.findOneAndDelete({ _id: id, companyName });
  }
}

module.exports = ProjectService;
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    machine_id: {
      type: DataTypes.INTEGER,
    },
    repare: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATEONLY
    },
    interval: {
      type: DataTypes.TIME,
    },
  });

  return Task;
};
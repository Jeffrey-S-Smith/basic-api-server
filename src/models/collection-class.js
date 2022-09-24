'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      if (id) {
        return this.model.findOne({ where: { id: id } });
      } else {
        return this.model.findAll();
      }
    } catch (err) {
      return err;
    }

  }
  async create(json) {
    if (!json) {
      throw new Error('No json provided to create function');
    } else {
      return this.model.create(json);
    }
  }
  async update(id, json) {
    try {
      let record = await this.model.findOne({ where: { id: id } });
      let updatedRecord = await record.update(json);
      return updatedRecord;
    } catch (err) {
      return err;
    }
  }
  async delete(id) {
    try {
      if (!id) {
        throw new Error('No id provided');
      }
      let recordToDestroy = await this.model.findOne({ where: { id: id } });
      await this.model.destroy({ where: { id: id } });
      return recordToDestroy;
    } catch (err) {
      return err;
    }
  }
}

module.exports = Collection;
import http from "../http-common";

class WheelDataService {
  getAll() {
    return http.get("/wheels");
  }

  get(id) {
    return http.get(`/wheels/${id}`);
  }

  create(data) {
    return http.post("/wheels", data);
  }

  update(id, data) {
    return http.put(`/wheels/${id}`, data);
  }

  delete(id) {
    return http.delete(`/wheels/${id}`);
  }

  deleteAll() {
    return http.delete(`/wheels`);
  }

  findByWheels_name(wheels_name) {
    return http.get(`/wheels?wheels_name=${wheels_name}`);
  }
}

export default new WheelDataService();
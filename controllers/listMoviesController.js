const fetch = require("node-fetch");

const listMoviesController = async (request, response) => {
  const { page = 1, term = 0 } = await request.params;

  const url = `https://yts.torrentbay.to/api/v2/list_movies.json?page=${page}&&limit=50&&sort_by=year&&order_by=desc&&query_term=${term}`;

  get_data(url, response);
};

const get_data = async (url, res) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.status != "ok") return;
    res.send({
      message: json.status_message,
      data: json.data,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

module.exports = listMoviesController;

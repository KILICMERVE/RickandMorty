using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EpisodeController : ControllerBase
    {
        IEpisodeService _episodeService;

        public EpisodeController(IEpisodeService episodeService)
        {
            _episodeService = episodeService;
        }

        [HttpGet("getall")]
        public ActionResult<IEnumerable<Episode>> GetAll()
        {
            return Ok(_episodeService.GetAll());
        }
        [HttpGet("get")]
        public ActionResult<IEnumerable<Episode>> Get(int episodeId)
        {
            return new JsonResult(_episodeService.GetEpisode(episodeId));
        }

    }
}
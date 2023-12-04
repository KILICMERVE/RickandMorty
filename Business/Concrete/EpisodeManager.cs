using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class EpisodeManager : IEpisodeService
    {
        IEpisodeDal _episodeDal;

        public EpisodeManager(IEpisodeDal episodeDal)
        {
            _episodeDal = episodeDal;
        }
        public List<Episode> GetAll()
        {
            return _episodeDal.GetList();
        }

        public Episode GetEpisode(int episodeId)
        {
            return _episodeDal.Get(c => c.EpisodeId == episodeId);
        }
    }
}

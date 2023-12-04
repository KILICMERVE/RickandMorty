using Core.Enities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Episode : IEntity
    {
        public int EpisodeId { get; set; }
        public string EpisodeNumber { get; set; }
        public string EpisodeName { get; set; }
        public string EpisodeVideo { get; set; }
    }
}


using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
/**
Database handler for querying the database for a 
list of activities stored within the database
**/
namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        // Handler - List of activities returned from handler
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            // Handler method - used to async process activity listing business logic upon request
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities.ToListAsync();

                return activities;
            }
        }
    }
}
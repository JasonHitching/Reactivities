using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities {
    public class Delete {
        public class Command : IRequest {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command> {
            public Handler(DataContext context) {
                _context = context;
            }

            private readonly DataContext _context;

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken) {

                var activity = await _context.Activities.FindAsync(request.Id);

                //Check if a valid activity was retrieved, delete it if yes
                if (activity == null) {
                    throw new Exception("Could not find activity");
                } else {
                    _context.Remove(activity);
                }

                var success = await _context.SaveChangesAsync() > 0;

                // If true
                if (success) {
                    return Unit.Value;
                } else {
                    throw new Exception("Unable to delete activity");
                }

            }
        }
    }
}
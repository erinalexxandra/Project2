var GAME_LEVELS = [
  ["                                                                                      ",
   "                                                                                      ",
   "                        y y        oo                   y y                           ",
   "                         y        xxxx                   y       y y                  ",
   "           y y                                                  yyyyy                 ",
   "          yyyyy                                                  yyy                  ",
   "  xx       yyy             o  o          o  o                     y                   ",
   "  x         y            x  =   x      x   =  x                        y y        xx  ",
   "  x             o  o     xxxxxxxx      xxxxxxxx                         y          x  ",
   "  x                               x  x             x   x                           x  ",
   "  x           x  =   x            x!!x     y y     x!!!x                           x  ",
   "  x           xxxxxxxx            xxxx      y      xxxxx                           x  ",
   "  x                                                 x                              x  ",
   "  x              y y                                x  o         o o               x  ",
   "  x  @    x       y          o                      x             p          o  h  x  ",
   "  xxxxxxxxx               xxxxxxx   xx   xxx    xxxxxxxxxx     xxxxxxx      xxxxxxxx  ",
   "          x               x     x =      x x       x!!x        x     x      x         ",
   "          xxxx       xxxxxx     x     =  x x       xxxx        x     x      x         ",
   "             x       x          x   =    x x                   x     x      x         ",
   "             xxxx =  x          x!!!!!!!!x xxxxxx         xxxxxx     x!!!!!!x         ",
   "                xxxxxx          x!!!!!!!!x      x    =    x          x!!!!!!x         ",
   "                                xxxxxxxxxx      xxxxxxxxxxx          xxxxxxxx         ",
   "                                                                                      "],
  ["xxxxxxxxxxxxxxxxx                                                                                                 ",
   "           v    x                                                                                                 ",
   "  @             x                                                                                                 ",
   "xxxxxxx         x                                                                                                 ",
   "      x        xx                                                                                                 ",
   "      x         x                                                                                                 ",
   "      x         x                                                           x!!!!!xxxxxxx!!!!!!!                  ",
   "      xx       xx                                                           xxxxxx       xxxxxxx!!!!!!!!!!!       ",
   "                x                                             o                                 xxxxxxxxxxx!!!!!!!",
   "  o o           x                                                                                          xxxxxxx",
   "xxxxxxx        xx                                           x=   x       xxx                                     x",
   "!!!!!!x         x                                           xxxxxx          xxxx                                 x",
   " v v vxx        x                    o                    xx                                                     x",
   "      x        xx                                       xx                                                       x",
   "      x         x                    xx         xxxx                                xxx                          x",
   "      xo        x            xx                                            x       x                             x",
   "      xx        x          !!xx                                            x!!!!!!x                              x",
   "      x         x          xx                                              x!!!!!x                               x",
   "      x         x  o  !!!xx                                           xx   xxxxxx                             h  x",
   "      x        xx     xxx                                             xx!!!xxxxxx                                x",
   "      x         xxxxxx                                      xxx       xx!!!x                 p          xxxxxxxxxx",
   "                                                            xxx!!!!!!!xx!!!x  o        xx   xxx   xx             x",
   "                                                   xxxx     xxx!!!!!!!xx!!!xxxxxx =            ==      =         x",
   "  o o           x=           =             =x!!!!!!!!!!!!!!!xxx!!!!!!!xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                         x    ",
   "                                                                                                         x    ",
   "                                                 o                                                       x    ",
   "                                                 x                                                       x    ",
   "                                                 !                                           x           x    ",
   "                                                !!!                                     x                x    ",
   "                                            x!!!!!!!!!x                                              h   x    ",
   "                                            xxxxxxxxxxx                      x             x         x   x    ",
   "                                                                                    x                    x    ",
   "x                                     x                     x             x                              x    ",
   "x                                    xx             x       x              x                             x    ",
   "x                                    vx    x          x      x                                           x    ",
   "x                                     x                       x                 x                        x    ",
   "x                                   xxxx       xx          o xx                                          x    ",
   "x                    oo             x                      xxxxxx                       oo               x    ",
   "x                   xxxx           x            x                xx     p              xxxx              x    ",
   "x                    vv           x     x                          xx = x                              0 x    ",
   "x                                x                  xx               xxxx    =    x                    xxx    ",
   "x                             xxx                                        xxxxxxxxxx=            =xxxxxxxxx    ",
   "x                           xx                 x       x                           xxxx!!!xxxxxx  x    x x    ",
   "x            !!!xxxxxxxxxxxx   h               v            o                          xxx        v    v x    ",
   "x            xxx         v  xxxxxx                          xx                           x               x    ",
   "x          xx                     x                        x                            v                x    ",
   "x      !!xx          oo                                    v               x                             x    ",
   "x  h   xx           xxxx                                                                                 x    ",
   "xxxxxxx                                    xx      xxxx               x                               o  x    ",
   "x                          x                                    x     v           xxxx      x         x  x    ",
   "x              xx=         x       xx                                                                    x    ",
   "x @          xxxx!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x    ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              "],
   ["                                                                                                                  ",
    "                                                                                                                  ",
    "                                                                                                                  ",
    "                                    x   x  xxxxxx  x    x                                                         ",
    "                                     x x   x    x  x    x                                                         ",
    "                                      x    x    x  x    x                                                         ",
    "                                      x    x    x  x    x                                                         ",
    "                                      x    xxxxxx  xxxxxx                                                         ",
    "                                                                                                                  ",
    "                                   x    x  xxxxxx  x    x  x                                                      ",
    "                                   x    x     x    xx   x  x                                                      ",
    "                                   x    x     x    x x  x  x                                                      ",
    "                                   x xx x     x    x  x x                                                         ",
    "                                    x  x   xxxxxx  x   xx  x                                                      ",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

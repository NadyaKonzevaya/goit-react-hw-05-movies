"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[475],{475:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(885),c=e(390),o=e(731),a=e(739),i=e(791),u=e(184),s=function(){var t=(0,i.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,a.TH)();return(0,i.useEffect)((function(){c.Z.fetchTrendingMovies().then(s)}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)("ul",{children:e.map((function(t){var n=t.id,e=t.title;return(0,u.jsx)("li",{children:(0,u.jsx)(o.OL,{to:"movies/".concat(n),state:{from:f},children:e})},n)}))})]})}},390:function(t,n,e){var r=e(44),c="http://api.themoviedb.org",o="35b67d916044ed61f84d01dde3676d84",a={fetchTrendingMovies:function(){return r.ZP.get("".concat(c,"/3/trending/movie/day?api_key=").concat(o)).then((function(t){if(200!==t.status)throw new Error(t.status);return t.data})).then((function(t){return t.results}))},fetchAllMovies:function(t){return r.ZP.get("".concat(c,"/3/search/movie?api_key=").concat(o,"&query=").concat(t)).then((function(t){if(200!==t.status)throw new Error(t.status);return t.data})).then((function(t){return t.results}))},fetchMovieInfo:function(t){return r.ZP.get("".concat(c,"/3/movie/").concat(t,"?api_key=").concat(o)).then((function(t){if(200!==t.status)throw new Error(t.status);return t.data})).then((function(t){return t}))},fetchMovieReviews:function(t){return r.ZP.get("".concat(c,"/3/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(t){if(200!==t.status)throw new Error(t.status);return t.data})).then((function(t){return t.results}))},fetchMovieCast:function(t){return r.ZP.get("".concat(c,"/3/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(t){if(200!==t.status)throw new Error(t.status);return t.data})).then((function(t){return t.cast}))}};n.Z=a}}]);
//# sourceMappingURL=475.10a944d3.chunk.js.map
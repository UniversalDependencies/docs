---
layout: relation
title: 'det:noun'
shortdef: 'article of a prearticulated noun'
udver: '2'
---

Like [prearticulated adjectives](det-adj.html), some nouns are also prearticulated
and we use the relation `det:noun` to attach the article to the noun. Note that if a noun occurs
with an article that signifies a genitive construction, the article will be attached via plain
`det` relation. However, a nominalized adjective has an article that is attached as `det:noun`
(note that in the example below, _të vdekurit_ “the dead” is in accusative rather than genitive).

~~~ sdparse
statistika për të vdekurit në luftë \n statistics on the dead in war
det:noun(vdekurit, të)
~~~

<!-- Interlanguage links updated St lis 3 20:58:50 CET 2021 -->

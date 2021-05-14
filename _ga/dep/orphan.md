---
layout: relation
title: 'orphan'
redirect_from: "ga/dep/remnant.html"
shortdef: 'remnant in ellipsis'
udver: '2'
---

The `orphan` relation is employed in cases of head ellipsis, i.e. where promotion results in an unnatural dependency because  one of the core arguments is promoted to being head of the clause. Few examples of this have been observed in the Irish treebank thus far.

### Examples

_Tháinig riail chun cinn a choiscfeadh dath a chur ar dhath eile, nó <b>miotal</b> ar mhiotal eile._ 'A rule was introduced that would ban placing one colour over another, or one <b>metal</b> over another.'

~~~ sdparse
Tháinig riail chun cinn a choiscfeadh dath a chur ar dhath eile, nó miotal ar mhiotal eile. \n Came rule to fore that would_ban colour to put on colour other, or metal on metal other.
orphan(dath, miotal)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:19 CEST 2021 -->

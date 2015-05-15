---
layout: relation
title: 'det'
shortdef: 'determiner'
---

The `det`label marks the relationship between a noun and its determiner.

In Irish there is no indefinite article, only a definite article. The definite article can be singular (_an_) or plural (_na_).

### Examples

_<b>an</b> clár_ '<b>the</b> programme'

~~~ sdparse
an clár \n the programme
det(clár, an)
~~~

_<b>an</b> cláranna_ '<b>the</b> programmes'

~~~ sdparse
na cláranna \n the programmes
det(cláranna, na)
~~~


 Two pre-determiners can occur before a noun:

### Examples

_<b>gach uile</b> ábhar_  '<b>every single</b> subject'

~~~ sdparse
gach uile ábhar \n every single subject 
det(ábhar, gach)
det(ábhar, uile)
~~~

Two determiners can be used each side of a noun: pre-determiners and post-determiners:

_<b>an</b> tuairim <b>sin</b>_ '<b>that</b> opinion'  (_an+sin_ = 'that')

~~~ sdparse
an tuairim sin \n the opinion DEM
det(tuairim, an)
det(tuairim, sin)
~~~

_<b>an</b> leabhar <b>úd</b>_ '<b>that</b> book

~~~ sdparse
an leabhar úd \n the book DEM
det(leabhar, an)
det(leabhar, úd)
~~~

_<b>an</b> alt <b>seo</b>_ '<b>this</b> paragraph'

~~~ sdparse
an alt seo \n the paragraph DEM
det(alt, an)
det(alt, seo)
~~~

_<b>an chéad</b> cheannaire <b>eile</b>_ '</b>the next</b> leader'

~~~ sdparse
an chéad cheannaire eile \n the first leader other
det(cheannaire, an)
det(cheannaire, eile)
quant(cheannaire, chéad)
~~~


---
layout: relation
title: 'case'
shortdef: 'case marking'
---

The case relation is used for any case-marking element which is
treated as a separate syntactic word (including prepositions,
postpositions, and clitic case markers). Case-marking elements are
treated as dependents of the noun or clause they attach to.

In Turkish, case marking is typically done through suffixation,
in which case the case-marked word will carry the appropriate [Case](tr-feat/Case) feature.
The `case` relation marks postpositions,
and some of the case-like suffixes that are tokenized as separate syntactic tokens (inflectional groups).

~~~ sdparse
Ağaçların arasında kayboldular . \n They disappeared _between_ the trees
case(Ağaçların, arasında)
~~~

~~~ sdparse
Bu kitabı annem için aldım . \n I bought this book _for_ my mother
case(annem, için)
~~~

~~~ sdparse
Öğleden sonra dersim var . \n I have a class _after_ noon (=in the afternoon)
case(Öğleden, sonra)
~~~

~~~ sdparse
İkiye kadar bunu bitirmem gerek \n I need to finish this until\/by two
case(İkiye, kadar)
~~~

~~~ sdparse
Siyah saç –lı kız \n The girl _with_ black hair
case(saç, –lı)
~~~

Currently, we also use `case` for some not-so-case-like modifiers.

~~~ sdparse
Arabada –ki kız \n The girl in the car
case(Arabada, –ki)
~~~

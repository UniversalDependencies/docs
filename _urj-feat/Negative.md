---
layout: feature
title: 'Negative'
shortdef: 'whether the word can be or is negated'
---

### Description

Negation is prominent feature in Uralic languages. The negation feature of
Uralic dependencies is primarily used for the verb forms that go in negative
sentences. In many cases there is a separate verb form for negative sentences
that cannot be used in a context without negation, sometimes called a
connegative form. This token should have feature Negative=Yes. There is no need
to mark positive or affirmative forms with Negative=No feature, unless...

See also the `Conneg` feature, that is used in most uralic languages for the
verb forms that accompany negation verb.

This is a bit messy TODO.

### `Neg`: Negative form

Used for negation verb.

~~~ conllu
# sentence-text: En alkuun ymmärtänyt kysymystä.
1       En      ei      VERB    V       Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act        3       neg
     _       _
2       alkuun  alku    NOUN    N       Case=Ill|Number=Sing    3       nmod    _       _
3       ymmärtänyt      ymmärtää        VERB    V       Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act   0       root    _       _
4       kysymystä       kysymys NOUN    N       Case=Par|Number=Sing    3       dobj    _       SpaceAfter=No
5       .       .       PUNCT   Punct   _       3       punct   _       _
~~~̃

#### Negative examples

* [fi] _en_ "I do not", _ei_ "no, he doesn't"

### `Pos`: Positive form

Is used for.

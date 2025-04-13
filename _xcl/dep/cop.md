---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---

A `cop` (copula) is the relation of a function word used to link a subject to a nonverbal predicate. The verbal copula եմ/_em_ “to be” and its perfective counterpart լինիմ/_linim_ “to become” are tagged [AUX](). Pronominal negated copula չիք/_čʽikʽ_ (“there is no”) is tagged [PRON](). The `cop` relation should only be used for pure copulas that add at most TAME categories to the meaning of the predicate, and only when the nonverbal predicate is treated as the head of the clause. In Classical Armenian, the auxiliary եմ has a defective paradigm and the auxiliary լինիմ is used instead for perfective predicates. Given that the [Aspect]() is a productive grammatical category, the two auxiliaries are considered as complementary copulas.

~~~ sdparse
Եւ էին (եմ) արդարք երկոքին առաջի Աստուծոյ. ։ \n They were both righteous in the sight of God. .
cop(արդարք, էին)
cop(righteous, were)
~~~

~~~ sdparse
Որպէս աւանդեցին մեզ որ ի սկզբանէ ականատեսք եւ սպասաւորք եղեն (լինիմ) բանի ն : \n Just as they were handed down to us by those who from the beginning were eyewitnesses and servants of the word .
cop(ականատեսք, եղեն)
cop(eyewitnesses, were)
~~~

The negated copula represents a grammaticalized combination of a negative particle չ=/_čʽ=_ and an indefinite pronoun իք/_ikʽ_ “anything”.

~~~ sdparse
չիք ինչ ծածուկ . որ ոչ յայտ լիցի \n nothing is concealed that will not become evident
cop(ինչ, չիք)
cop(nothing, is)
~~~

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Klein, Jared. 2017. The syntax of Armenian. In: J. Klein et al. (eds.), _Handbook of comparative and historical Indo-European linguistics_. Berlin, Boston: Walter de Gruyter: 1097‒1115.
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:42 CET -->

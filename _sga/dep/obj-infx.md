---
layout: relation
title:  'obj:infx'
shortdef : 'infixed pronouns'
udver: '2'
---

Independent pronouns in Old Irish are never used to form the object of a verb. Instead, special "infixed" forms are employed within the verbal complex, in a position between the preceding element and the remainder of the verb, which is syntactically distinct from any which may be occupied by independent pronouns. The forms of these ifixed pronouns are distinct from independent pronominal forms, and as they form close-compounds with surrounding elements, these too can be altered by the inclusion of an infixed object pronoun.

Where a pronoun is infixed in this manner, the subtype `obj:infx` is used to express the relation between the pronoun and the preceding element. It does not matter whether the pronoun is a direct or indirect object of the verb. The governor of the dependency is the preceding element (the initial preverb or a conjunct particle, <b>NOT</b> the verb), and the dependent is the pronoun.

<b>NOTE</b>: The reason the relation is not between the pronoun and the remainder of the verb is that the pronoun forms a closer syntactic connection with the preceding element, with which it generally shares a single stress. The remainder of the verb, which is expressed by a single token regardless of any further preverbs which may be compounded within it, bears stress on its first syllable. This makes the remainder of the verb resistant to change as a result of pronominal infixing, whereas the form of the preverb can be altered by combination with certain infixed pronouns. For example, infixing the pronoun, _a_ "it" (3rd sg. Neut. - Class A) between the preverb _do_ and the remainder of the verb, _dobeir_ "he gives", renders the form _dabeir_ "he gives it". Orthographically, the remainder of the verb, _beir_, is unaffected, however, the preverb is reduced from _do_ to _d_ to accommodate the pronoun, _a_. The remainder of the verb can be affected by initial mutations caused by the pronoun, however, such mutations are generally associated with the anlaut in of words Old Irish.

<b>NOTE</b>: The `obj:infx` is not used for non-pronominal elements which may be infixed within the verbal complex by means of tmesis. This is because the dependency of elements infixed by tmesis is governed by the verb, not the preverb or conjunct particle.

### Examples

_do<b>m</b>beir_ "he gives <b>me</b> (to ...)"

~~~ sdparse
do m beir \n to me he_bears
obj:infx(do, m)
~~~

_d<b>a</b>beir_ "he gives <b>it</b> (to ...)"

~~~ sdparse
d a beir \n to it he_bears
obj:infx(d, a)
~~~

_fo<b>t</b>gaib_ "he finds <b>you</b> (sg.)"

~~~ sdparse
fo t gaib \n under you (sg.) he_bears
obj:infx(fo, t)
~~~

_a<b>tob</b>cíu_ "I see <b>you</b> (pl.)"

~~~ sdparse
a tob cíu \n towards you (pl.) I_look
obj:infx(a, tob)
~~~

### Further Examples

* _f<b>a</b>ngaibiu_ "I find <b>him</b>"
* _a<b>t</b>biur_ "I speak <b>it</b>"
* _ní<b>s</b>ngaib_ "he does not find <b>them</b>"
* _ní<b>s</b>fil_ "<b>she</b> is not"
* _no<b>b</b>caram_ "we love <b>you</b>"
* _no<b>m</b>choimmdiu cóima_ "may the Lord cherish <b>me</b>"
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:11:14 CET -->

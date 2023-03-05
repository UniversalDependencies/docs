---
layout: postag
title: 'DET'
shortdef: 'determiner'
udver: '2'
---

### Definition

The `DET` tag is used for the articles _ein_ “a”, _der_ “the”, and for pronominal words that _can_ pre-modify nouns
(regardless whether they actually do so in the given sentence) and can express agreement in [Gender](), [Number]()
and [Case](). The traditional grammar would label these words as pronouns. In UD, we reserve the [PRON]() category
for pronouns that are always used substantively (as opposed to attributively).

Since the borderline between determiners (`DET`) and pronouns (`PRON`) is determined by the lexicon and not by the
sentence context, some determiners may occur in positions that are traditionally not associated with determiners in
English: they can constitute a nominal (without accompanying a noun) and act as core arguments in a clause. This is
not a problem, as the syntactic information is encoded in the dependency relations.

So the negative determiner _kein_ “no” acts attributively (i.e., as a syntactic determiner) in the following example
and is attached to the modified noun via the [det]() relation.

~~~ sdparse
Der Inhaber würdigt dem Kunden keines/DET Blickes/NOUN . \n The owner pays the customer no.Masc.Sing.Gen attention.Masc.Sing.Gen .
det(Blickes, keines)
det(attention.Masc.Sing.Gen, no.Masc.Sing.Gen)
~~~

However, in the next example, _keiner_ is directly the nominal occupying the subject position; it is still tagged `DET`
but it is attached via the [nsubj]() relation. We note that the same annotation would also result from positing a noun
phrase _kein Mensch_ “no man”, in which the noun _Mensch_ has been elided.

~~~ sdparse
Keiner/DET interessierte/VERB sich für das auffällig ratlose Verhalten der Kunden . \n Nobody.Masc.Sing.Nom was-interested REFL in the conspicuously helpless behavior of-the customers .
nsubj(interessierte, Keiner)
nsubj(was-interested, Nobody.Masc.Sing.Nom)
~~~

Finally, in the third example, the accusative _keine_ is the head of the direct object nominal and it has its own
nominal dependent _von beiden Frauen_ “of the two women”.

~~~ sdparse
Er sagt , dass er keine/DET von/ADP beiden/DET Frauen/NOUN heiraten/VERB wolle . \n He says , that he none.Fem.Sing.Acc of the-two women marry wants .
obj(heiraten, keine)
obj(marry, none.Fem.Sing.Acc)
nmod(keine, Frauen)
nmod(none.Fem.Sing.Acc, women)
case(Frauen, von)
case(women, of)
det(Frauen, beiden)
det(women, the-two)
~~~

### Examples

* Articles: _ein_ “a”, _der_ “the”
* Possessive personal determiners: _mein_ “my”, _dein_ “your”, _sein_ “his, its”, _ihr_ “her, their”, _unser_ “our”, _euer_ “your”
* Demonstratives: _dieser_ “this”, _jener_ “that”, _ebendieser_ “this”, _dergleiche_ “the same”, _derjenige_ “the (one)”, _derselbe_ “the same”
* Interrogative determiners: _welcher_ “which”
* Total determiners: _jeder_ “every”, _alle_ “all”, _beide_ “both”
* Negative determiners: _kein_ “no”
* Indefinite determiners: _einige_ “some”, _etliche_ “several”
* Indefinite quantifiers: _viel_ “much/many”, _ebensoviel_ “just as much/many”, _mehr_ “more”, _wenig_ “little/few”, _weniger_ “less/fewer”

As a predeterminer before the definite article, _all_ occurs without the inflectional suffix, but it is still kept
as a form of the lexeme _alle_: _In <b>all</b> den Jahren waren wir mit den Ergebnissen sehr zufrieden._
“Over the years we have been very happy with the results.” Nevertheless, the inflected forms are also not excluded:
_<b>Alle</b> diese Linien verkehrten zum Bahnhof._ “All of these lines went to the station.”

### Uninflected Determiners

Some words do not inflect in the manner described above but they still occur mostly in determiner position, i.e.,
they replace the article. They are tagged `DET`, too.

### Examples

* Demonstratives: _derlei_ “such”
* Total determiners: _allerlei_ “all kinds of”, _allerhand_ “all sorts”

### Determiners vs. Pronouns

What has been said above about _kein_ would apply to most of the other determiners, including the indefinite article
_ein_. However, there is the question of the subclass normally encoded by the [PronType]() feature: as an article,
_ein_ would be `PronType=Art`, as a self-standing pronoun it would get `PronType=Ind` (note that _kein_ receives
`PronType=Neg` in both contexts). To be consistent, we treat the `PronType` subclass as lexical (i.e. not changing
with context) and always keep _ein_ in the same subclass: `PronType=Art`. It thus receives a treatment analogous
to the treatment of _kein, mein, dein_.

The situation is even more complicated with the definite article _der_. A homonymous word functions as a relative
pronoun. Not only do we want to use `PronType=Rel` to recognize relative pronouns; some of the forms in the paradigm
are actually not homonymous (the paradigm of the relative pronoun includes the forms _dessen_, _deren_, _denen_, which
cannot be used as definite articles). Therefore, _der_ as a relative pronoun is considered a separate lexeme and its
UPOS tag is [PRON]().

### Determiners vs. Numerals

The word _ein_ can be either translated as the indefinite article “a” or as the numeral “one”. It is always tagged
`DET` and not [NUM](), i.e., we do not attempt to distinguish contexts in which the emphasis is on quantity and not
on indefiniteness. (The quantity is present in any case, as the indefinite article is never used in plural.) However,
note that the word form _eins_ “one” is treated as an independent lemma in the `NUM` category. It is the self-standing
numeral that does not accompany a counted noun (e.g. it can be the answer to the question “What is the number of
the bus line?”) and it is different from all forms of the determiner _ein_.

The word _beide_ “both” is also semantically a numeral, but unlike other cardinal numerals in German (including
_zwei_ “two”) it has the adjective-like declension paradigm and fits in the here-defined class of determiners.
It has the total subclass (`PronType=Tot`), as it refers to all members of a previously mentioned two-member set.
However, it also receives `NumType=Card` to mark the numeric component of its meaning.

### Determiners vs. Adjectives

Since we defined determiners as sharing properties of pronouns and adjectives, there is naturally also the question
of the borderline between determiners and adjectives; “being pronominal” is a vague term especially when it comes to
indefinite pronouns.

TBD: Is _anderer_ “other” a determiner, or an adjective? In the meaning of "not this one", it is more like an indefinite
determiner (but it still needs to be accompanied by an article). In the meaning of "not the same, not like this one",
it is closer to an adjective. Traditional grammar does not seem to include it under pronouns/determiners.

When used attributively, a German determiner usually does not occur together with another determiner in the same
nominal, although this is not a hard constraint. In contrast, an attributively used adjective is often accompanied
by a determiner (but this is not a requirement either).

### Indefinite Quantifiers

The quantifiers _viel_ “much/many”, _mehr_ “more”, _wenig_ “little/few”, _weniger_ “less/fewer” are tagged `DET`,
although their behavior partially differs from that of the other determiners. But it differs from other word classes,
too. They are not tagged [NUM](), as this category is reserved for definite cardinal numerals. In addition to the `DET`
UPOS tag, they have [PronType]()`=Ind`.

With countable nouns, the quantifier takes a suffix that signals agreement in gender, number and case:
_Religion ist die Erbin <b>vieler</b> Namen._ “Religion is the heir to many`.Plur.Masc.Gen names`.”
_Wir sind seit <b>vielen</b> Jahren Mandanten der Rechtsanwälte Ruland._ “We have been clients of Lawyers Ruland for many`.Plur.Neut.Dat` years.”
_Es gibt <b>viele</b> Banken._ “There are many`.Plur.Fem.Acc` banks.”
These occur normally in plural, but there are singular instances too, for example the fixed expression _<b>Vielen</b> Dank!_
“Many thanks!” (lit. Many`.Sing.Masc.Acc` thank!)

With mass nouns the quantifier occurs without the agreement suffix. This is similar to the short (adverbial,
predicative) form of adjectives:
_Man kann dort <b>viel</b> Geld lassen._ “You can leave a lot of money`.Sing.Neut.Acc` there.”
Mass nouns have only the singular form. Depending on their syntactic position, they can still distinguish [Case]().
If they were accompanied by another determiner, such as the definite article, the case (and gender) would be reflected
by the form of that determiner; but the quantifiers _viel, mehr, wenig, weniger_ do not inflect in such context.

Finally, the uninflected form can be also used adverbially to denote the degree of a property or predication:
_Jede Jugendherberge ist sehr <b>viel</b> besser und günstiger als dieses "Hotel"._ “Any youth hostel is much better and cheaper than this "hotel".”
_Parkplätze gibt es in unmittelbarer Nähe ausreichend <b>viel</b>._ “There are plenty of parking spaces in the immediate vicinity.”
They are tagged [ADV]() at present but this may be revised in the future.

### To Be Decided

* _die <b>allermeisten</b>_ “the vast majority”
* _anderer_ “other”
* _ausreichend_ “sufficient(ly)” => [ADJ]() (it can be used also as [advmod]()) (it is similar to the indefinite
  quantifiers mentioned above only when combined with uncountable nouns; as an inflected adjective with countable
  nouns it denotes quality (“good enough”) rather than quantity)
* _ein <b>bisschen</b>_ “a little bit” => etymologically a diminutive noun (with an indefinite article), but it is
  spelled with a lowercase “b”, indicating that it is no longer considered a noun; together the fixed expression works
  like a degree adverb or an indeclinable quantifier for uncountable nouns => we tentatively tag _bisschen_ as [ADV]()
  with `PronType=Ind`

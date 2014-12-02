---
layout: base
title:  'Syntax'
permalink: fi/overview/specific-syntax.html
---

# Specific constructions

Please note: this language-specific overview of guidelines for
specific constructions is a work in progress.

---

## Subjects and objects
<!-- this section originally from TDT guidelines section 5.1 -->

Finnish subjects and objects are straightforward to recognize in their
prototypical cases, but both phenomena also have some difficult cases,
which are discussed here.

The subject is the primary complement of the verb, usually denoting
the entity doing something. In addition to the *basic subject* (see
[ISK §910](http://scripta.kotus.fi/visk/sisallys.php?p=910)), also
*existential subjects* (eksistentiaalisubjekti, e-subjekti) are
considered subjects in UD Finnish.

<!-- fname:nsubj_existential.pdf -->
~~~ sdparse
Tien vieressä on talo . \n Road beside is house .
case(Tien-1, vieressä-2)
nmod(on-3, Tien-1)
nsubj(on-3, talo-4)
punct(on-3, .-5)
~~~

Possessive clauses (omistuslause) are considered a subtype of
existential clauses, and analyzed similarly. The owner in possessive
clauses is marked using the type [`nmod:own`]().

<!-- fname:nsubj_possessive.pdf -->
~~~ sdparse
Hänellä on oma asunto . \n At_him is own apartment .
nmod:own(on-2, Hänellä-1)
nsubj(on-2, asunto-4)
amod(asunto-4, oma-3)
punct(on-2, .-5)
~~~

Also the genitive subject in for instance necessive structures 
<!-- TODO restore: (see Section 5.14) -->
is annotated as [`nsubj`](). (This is not to be confused with the
genitive subject of a noun, [nmod:gsubj]())

<!-- fname:nsubj_necessive.pdf -->
~~~ sdparse
Minun on pakko mennä kotiin . \n I(gen.) is obligation go home .
nsubj(mennä-4, Minun-1)
cop(pakko-3, on-2)
ccomp:nf(pakko-3, mennä-4)
nmod(mennä-4, kotiin-5)
punct(pakko-3, .-6)
~~~

In UD Finnish, subjects are allowed to be in the *nominative*,
*genitive* and *partitive* [cases](Case), and in addition, also an
*accusative* subject is possible (the accusative case only exists for
certain pronouns). Two notable situations where a complement in the
accusative form is analyzed as the subject are:

1. Nonfinite clausal complements (*Sain hänet itkemään.* "I made him
   cry.")
2. Possessive clauses (*Minulla on sinut.* "I have you.")

The same cases are allowed for objects as for subjects: the
nominative, the partitive, the genitive and the accusative.
Complements in other cases are analyzed as *nominal modifiers*
([`nmod`]()), despite their complement status.

*Object cased amount adverbials* (objektin sijainen määrän
adverbiaali, OSMA
[ISK,§972](http://scripta.kotus.fi/visk/sisallys.php?p=972)), which,
as the name implies, use the same cases as objects, are analyzed as
nominal modifiers. However, certain verbs are considered such that
they can take as their object an expression that would otherwise be
considered an amount adverbial. Examples where an amount is considered
the object are for instance:

#### Examples

* [fi] *Juoksin kilometrin.* "I ran a kilometer."
* [fi] *Moottori pyöri kymmenen kierrosta.* "The motor ran ten rounds."
* [fi] *Maitotölkki painaa kilon.* "A milk jar weighs a kilogram."

Passive verbforms take a direct object and not a passive subject, as
in for instance English.

**FIGURE MISSING**

However, there are certain verbs, so called *derived passives*
[ISK, §336](http://scripta.kotus.fi/visk/sisallys.php?p=336), which
may resemble passive verbforms in meaning, but which in fact take a
subject, not an object. (In English, the Finnish derived passives
generally correspond to intransitive uses of a verb, such as *the door
opens*, sometimes termed *inchoative*.).

**FIGURE MISSING**

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=910> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=972> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=336> (in Finnish)

## Copulas
<!-- this section originally from TDT guidelines section 5.2 -->

This section discusses first defining copular verbs and predicatives,
then copulas in combination with auxiliaries, and finally the
distinction between the subject and the predicative in copular
clauses.

### What can be a predicative?
<!-- this section originally from TDT guidelines section 5.2.1 -->

In the UD scheme, the head of a copular clause is the predicative, not
the verb (copula), unlike in other clauses. The Finnish language only
has one copular verb, *olla* "to be"
[ISK §891](http://scripta.kotus.fi/visk/sisallys.php?p=891), and in
order to avoid marking other verbs as copular and to prevent copular
clauses from having multiple head words, rules are needed to define
what is accepted as a predicative.

The basic alternatives for predicatives are nominals (nouns,
adjectives, pronouns and numerals). Words of these parts of speech are
required to be in *nominative*, *partitive* or *genitive* case to be
accepted as predicatives.

<!-- fname:pred_nom.pdf -->
~~~
Varpunen on pieni lintu . \n Sparrow is small bird(nom.) .
nsubj:cop(lintu-4, Varpunen-1)
cop(lintu-4, on-2)
amod(lintu-4, pieni-3)
punct(lintu-4, .-5)
~~~

<!-- fname:pred_part.pdf -->
~~~ sdparse
Maali oli valkoista . \n Paint was white(part.) .
nsubj:cop(valkoista-3, Maali-1)
cop(valkoista-3, oli-2)
punct(valkoista-3, .-4)
~~~

<!-- fname:pred_gen.pdf -->
~~~ sdparse
Tämä kirja on minun . \n This book is mine(gen.) .
det(kirja-2, Tämä-1)
nsubj:cop(minun-4, kirja-2)
cop(minun-4, on-3)
punct(minun-4, .-5)
~~~

Nominals in any other case are not marked as predicatives, even if
they are associated with the verb *olla*. They, similarly to
adpositional phrases, are marked as *nominal modifiers* ([`nmod`]()),
and the verb is marked as the head of the clause, even if it is *olla*
"to be".

<!-- fname:nonpred_nommod.pdf -->
~~~ sdparse
Lapset olivat pihalla . \n Children were on_yard .
nsubj(olivat-2, Lapset-1)
nmod(olivat-2, pihalla-3)
punct(olivat-2, .-4)
~~~

<!-- fname:nonpred_adpos.pdf -->
~~~ sdparse
Lapset olivat talon takana . \n Children were behind house .
nsubj(olivat-2, Lapset-1)
nmod(olivat-2, talon-3)
case(talon-3, takana-4)
punct(olivat-2, .-5)
~~~

This restriction is to prevent a clause from having two predicatives
and hence two heads, which would be the case in a sentence such as the
following:

#### Examples

* [fi] *Paketti on Oulusta ystävältäni.* "The package is from Oulu
  from my friend."

Here both *Oulusta* "from Oulu" and *ystävältäni* "from my friend"
could be interpreted as predicatives, resulting in a clause with two
heads, or alternatively, a decision between two equally likely
head-candidates. Therefore, only nominative, genitive and partitive
are allowed as cases for predicatives.

Note that cases not allowed for predicatives include the essive case;
this is to avoid marking verbs other than *olla* as copulas.

<!-- fname:nonpred_ess1.pdf -->
~~~ sdparse
Mies oli portsarina baarissa . \n Man was doorman(essive) in_bar .
nsubj(oli-2, Mies-1)
nmod(oli-2, portsarina-3)
nmod(oli-2, baarissa-4)
punct(oli-2, .-5)
~~~

<!-- fname:nonpred_ess2.pdf -->
~~~ sdparse
Mies toimi portsarina baarissa . \n Mand worked doorman(essive) in_bar .
nsubj(toimi-2, Mies-1)
nmod(toimi-2, portsarina-3)
nmod(toimi-2, baarissa-4)
punct(toimi-2, .-5)
~~~

In addition to nominals, also adverbs can act as predicatives, given
that they do not express location or time. Note that with adverbs,
there is no restriction with regard to case, only that they are not
locational or temporal. As a result, adverbs such as *täällä* "here"
or *huomenna* "tomorrow" can not act as predicatives, but others, such
as *naimisissa* "married" (inessive adverb) and *raskaana* "pregnant"
(essive adverb) can, regardless of their case.

<!--
    TODO: Neither Omorfi nor UD Finnish marks case on adverbs, check
    the above for consistency.
-->

In UD Finnish, also a full clause can act as a predicative, in
addition to nominals and adverbs. In these cases, the head of the
clause acting as the predicative becomes also the head of the main
clause. (If the clause acting as the predicative is also a copular
clause, this results in the predicative clause seemingly having two
copula subjects and copulas. However, this is not how the analysis
should be interpreted.)

<!-- fname:clause_predicative.pdf -->
~~~ sdparse
Tarkoitus on järjestää lopuksi juhlat . \n The_meaning is to_arrange in_the_end a_party .
nsubj:cop(järjestää-3, Tarkoitus-1)
cop(järjestää-3, on-2)
dobj(järjestää-3, juhlat-5)
advmod(järjestää-3, lopuksi-4)
punct(järjestää-3, .-6)
~~~

### Copulas and auxiliaries
<!-- this section originally from TDT guidelines section 5.2.2 -->

**NOTE/TODO: the following description copied from the TDT manual
conflicts with the UD specification. This should be revised or
rephrased as a diff.**

In the Finnish-specific version of the UD scheme, copular verbs and
auxiliaries take no dependents of their own, with one exception. An
auxiliary of a copular verb is attached to the copula, and not the
main predicative as is the usual case.  Note that this is the case
even if the resulting analysis becomes non-projective.

<!-- fname:copaux.pdf -->
~~~ sdparse
Hänkin on joskus ollut nuori . \n He_too has some_time been young .
nsubj:cop(nuori-5, Hänkin-1)
aux(ollut-4, on-2)
advmod(nuori-5, joskus-3)
cop(nuori-5, ollut-4)
punct(nuori-5, .-6)
~~~

The same rule is applied to the auxiliary of another auxiliary as
well. All other dependents are attached to the main verb or
predicative. (Note that this includes negation as well, even though
negation verbs are generally considered auxiliaries.)

<!-- fname:auxaux.pdf -->
~~~ sdparse
Minun ei ehkä olisi pitänyt sanoa niin . \n I not maybe have should said so .
nsubj(sanoa-6, Minun-1)
neg(sanoa-6, ei-2)
advmod(sanoa-6, ehkä-3)
aux(pitänyt-5, olisi-4)
aux(sanoa-6, pitänyt-5)
advmod(sanoa-6, niin-7)
punct(sanoa-6, .-8)
~~~

### The distinction between the predicative and the subject
<!-- this section originally from TDT guidelines section 5.2.3 -->

Distinguishing the subject from the predicative in copular clauses can
be difficult, as it would often be possible to invert the word-order
and thus swap the positions of the two elements. For instance in the
following sentences, either *kirahvit* "giraffes" or *eläimiä*
"animals" could be the subject and the other the predicative.

#### Examples

* [fi] *Kirahvit ovat mielenkiintoisimpia eläimiä.* "Giraffes are the most interesting animals."
* [fi] *Mielenkiintoisimpia eläimiä ovat kirahvit.* "The most interesting animals are the giraffes."

In UD Finnish, the main rule in annotating copular structures is that
the leftmost element is the subject and the rightmost one the
predicative. Hence, the above sentences would be annotated in the
following manner:

<!-- fname:giraffes1.pdf -->
~~~ sdparse
Kirahvit ovat mielenkiintoisimpia eläimiä . \n Giraffes are the_most_interesting animals .
nsubj:cop(eläimiä-4, Kirahvit-1)
cop(eläimiä-4, ovat-2)
amod(eläimiä-4, mielenkiintoisimpia-3)
punct(eläimiä-4, .-5)
~~~

<!-- fname:giraffes2.pdf -->
~~~ sdparse
Mielenkiintoisimpia eläimiä ovat kirahvit . \n The_most_interesting animals are giraffes .
amod(eläimiä-2, Mielenkiintoisimpia-1)
nsubj:cop(kirahvit-4, eläimiä-2)
cop(kirahvit-4, ovat-3)
punct(kirahvit-4, .-5)
~~~

Semantic considerations such as which concept is a subconcept of the
other are not taken into account in the annotation. However, it is
possible to mark the leftmost element the predicative in cases where
the word order is clearly inverted.  This occurs for instance in
(indirect) questions and sometimes relative clauses.  Note that
especially in questions, several different word orders are possible.

<!-- fname:indirectquestion_cop1.pdf -->
~~~ sdparse
Millainen matka oli ? \n What_like trip was ?
nsubj:cop(Millainen-1, matka-2)
cop(Millainen-1, oli-3)
punct(Millainen-1, ?-4)
~~~

<!-- fname:indirectquestion_cop2.pdf -->
~~~ sdparse
Kysyin , oliko matka mukava . \n I_asked , whether_was trip nice .
ccomp(Kysyin-1, mukava-5)
punct(Kysyin-1, .-6)
punct(mukava-5, ,-2)
cop(mukava-5, oliko-3)
nsubj:cop(mukava-5, matka-4)
~~~

<!-- fname:relativeclause_cop.pdf -->
~~~ sdparse
yhdistys , jonka puheenjohtaja Matikainen on \n association , of_which chairman Matikainen is
acl:relcl(yhdistys-1, puheenjohtaja-4)
punct(puheenjohtaja-4, ,-2)
rel(puheenjohtaja-4, jonka-3)
nsubj:cop(puheenjohtaja-4, Matikainen-5)
cop(puheenjohtaja-4, on-6)
~~~

Also, if the leftmost element of the copular clause is an adjective
rather than a noun or pronoun, it is considered that the word order is
inverted, and thus the adjective is marked as the predicative, not the
subject.

<!-- fname:adjectivefirst_cop.pdf -->
~~~ sdparse
Kaunishan tämä talo on . \n Beautiful this house is .
nsubj:cop(Kaunishan-1, talo-3)
det(talo-3, tämä-2)
cop(Kaunishan-1, on-4)
punct(Kaunishan-1, .-5)
~~~

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=891> (in Finnish)

## Appositions and appellation modifiers
<!-- this section originally from TDT guidelines section 5.3 -->

The Finnish Grammar (see ISK
[§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059),
[§1062](http://scripta.kotus.fi/visk/sisallys.php?p=1062))
distinguishes between three similar phenomena: the apposition, the
appellation modifier (*nimikemääarite*) and the supporting noun
(*tukisubstantiivi*). Out of these, the apposition and the appellation
modifier ([compound:nn]()) are distinguished in TDT, and supporting
noun structures are considered appositions.

All of these structures have in common that they all include two
(usually adjacent) elements, most often noun phrases, which refer to
the same entity or entities and have the same function in the
sentence. Thus, in order to be considered an apposition, an
appellation modifier or a supporting noun structure, a structure has
to fulfill the following criteria (the same as in the Finnish
grammar [§1059](http://scripta.kotus.fi/visk/sisallys.php?p=1059)):

1. Both elements of the structure must refer to the same entity
    or group of entities.
2. Both elements of the structure must have the same function
    in the sentence (for instance, the subject).

These criteria are interpreted rather loosely, and there are no
restrictions on the part of speech of the elements involved. Most
appositions (and appellation modifiers) in TDT consist of noun
phrases, but there are occurrences of different parts of speech as
appositions; notably the fiction section of the treebank contains
few examples of verbal appositions.

Among the expressions that fulfill criteria 1 and 2, six common
cases can be distinguished according to inflection and punctuation.

1. singular, both elements in nominative, no punctuation: _professori Matti Tamminen_ "professor Matti Tamminen"
2. singular, first element in nominative, second element inflected: _professori Matti Tammisen mukaan_ "according to professor Matti Tamminen"
3. singular, both elements in nominative, punctuation in between: _professori, Matti Tamminen_ "the professor, Matti Tamminen"
4. singular, first element inflected, second element in nominative: _romaanissa Putkinotko_ "in the novel Putkinotko"
5. singular, both elements inflected: _professorin, Matti Tammisen, mukaan_ "according to the professor, Matti Tamminen"
6. plural, elements either in nominative or inflected: _professorit Matti Tamminen ja Erkki Koivunen_ "the professors Matti Tamminen and Erkki Koivunen" or _professoreiden, Matti Tammisen ja Erkki Koivusen, mukaan_ "according to the professors, Matti Tamminen and Erkki Koivunen" or _professoreiden Matti Tamminen and Erkki Koivunen mukaan_ "according to the professors Matti Tamminen and Erkki Koivunen"

Out of these six cases, the first two are considered appellation
modifiers, and thus marked with the dependency type `nn`. Note that
the governor of the dependency in appellation modifiers is the latter
of the two words.

<!-- fname:nn_appellation.pdf -->
~~~ sdparse
Professori Matti Tamminen pitää puheen . \n Professor Matti Tamminen gives a_speech .
nn(Tamminen-3, Professori-1)
name(Tamminen-3, Matti-2)
nsubj(pitää-4, Tamminen-3)
dobj(pitää-4, puheen-5)
punct(pitää-4, .-6)
~~~

The remaining four cases are all considered appositions and marked
with the type `appos`. Contrary to appellation modifiers, in
apposition structures the first word is considered the governor.

<!-- fname:appos1.pdf -->
~~~ sdparse
Professori , Matti Tamminen , luennoi tänään . \n The_professor , Matti Tamminen , lectures today .
appos(Professori-1, Tamminen-4)
punct(Tamminen-4, ,-2)
punct(Tamminen-4, ,-5)
name(Tamminen-4, Matti-3)
nsubj(luennoi-6, Professori-1)
advmod(luennoi-6, tänään-7)
punct(luennoi-6, .-8)
~~~

It should be noted that case number 4 is in fact an example of a
supporting noun structure, but in TDT, these are marked as
appositions. In plural (case number 6), all possible case
combinations are considered appositions.

The only difference between the cases 1 and 3 is the presence or
absence of punctuation. Often, said punctuation is a comma, but also
parentheses, a dash or a colon are possible. As can be seen from the
examples above, the punctuation produces a semantic difference,
which is taken into account in the annotation. Punctuation
variations of the cases 2, 4, and 5 need not be considered, as these
variations are ungrammatical. (Naturally, ungrammatical phenomena
can and do occur in a corpus of actual language, but these cases are
resolved on a case-by-case basis.)

#### Examples

* [fi] \*_professori, Matti Tammisen mukaan_ "according to professor, Matti Tamminen"
* [fi] \*_romaanissa, Putkinotko_ "in the novel, Putkinotko"
* [fi] \*_professorin Matti Tammisen mukaan_ "according to the professor's Matti Tamminen"
  (unless a possessive reading is intended)

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=567> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1059> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1062> (in Finnish)

## Verbal dependents: Clauses, non-clauses, complements and modifiers
<!-- this section originally from TDT guidelines section 5.4 -->

One particularly challenging task in annotating in the UD Finnish
scheme is selecting the correct dependency type for dependents that
are verbal. Verbal dependents include different kinds of subordinate
clauses as well as infinitive and participal complements and
modifiers. A simplified description of the decision procedure for
verbal dependents is given in Table 1, and the full details are given
below.

**TABLE 1 OMITTED**

Some basic cases are relatively easy to decide. If the dependent is a
regular subordinate clause, the choices are clear. For relative
clauses the type to be used is [`acl:relcl`]() and as indirect
questions are clausal complements, the correct type for them is
[`ccomp`]().

If the subordinate clause is a conjunction clause, it can be either a
complement or a modifier. In the majority of cases, conjunction
clauses starting with the conjunction *että* are complements and
clauses starting with any other conjunction are modifiers. However, it
should be noted that the conjunction *että* can be a used instead of
the conjunction *jotta*, and respectively, also *jotta* can
(especially in spoken language) be used instead of *että*.

#### Examples

* [fi] *Minun täytyy nyt mennä, että en myöhästy.* / *~jotta en
  myöhästy.* "I have to go now so that I won't be late."
* [fi] *Hän sanoi, jotta tulee vasta illalla.* / *~että tulee vasta
  illalla.* "He said that I will only come in the evening."

In these cases, a clause starting with *että* is a modifier, and a
clause starting with *jotta* is a complement. Complement conjunction
clauses are marked with [`ccomp`]() and modifier ones with
[`advcl`]().

If the dependent is not a subordinate clause, the next deciding factor
is the part of speech of the governor. If the governor is a noun, the
dependent can be an infinitive modifier ([`acl:infmod`]()) or a
participle modifier ([`acl:partmod`]()).

If, in turn, the governor is a verb, then the dependent can be either
a complement or a modifier. A complement can be either clausal or
non-clausal. With clausal complements, there are three alternative
dependency types available: [`xcomp`](), [`ccomp`](), and
[`ccomp:nf`]().

If the subject of the dependent is shared with the governor (subject
control), the correct type to use is [`xcomp`](). If not, the decision
is made by the morphology of the dependent. If the form of the verb is
nonfinite (an infinitive or a participle), the correct type is
[`ccomp:nf`]().

If, in turn, the verb is in a finite form, the correct type is
[`ccomp`](). (For instance, the verb form *juoksevan* can, in addition
to a participle, be a finite form, as in *näin miehen juoksevan*. See
for instance ISK
[§938](http://scripta.kotus.fi/visk/sisallys.php?p=938),
[§1452](http://scripta.kotus.fi/visk/sisallys.php?p=1452) about
referative and temporal structures, which are considered finite.)

If the dependent is a non-clausal complement, it is a participal
complement that resembles adjectival complements. Some of these
complements can be modified, but all the same they do not form
clauses. These participal complements do not have their own dependency
type, and the type [`acl:partmod`]() is used to annotate them.

#### Examples

* [fi] *Poika vei kotitehtävän <b>opettajan tarkastettavaksi</b>.*
  "The boy took the homework to be inspected by the teacher."

If the dependent is not a complement but a modifier, again the
morphology of the dependent decides the dependency type. If the
dependent is either an infinitive or a temporal form, then the correct
dependency type is [`advcl`](). These cases are usually easily
recognized as *lauseenvastike* ("substitute of a clause").

#### Examples

* [fi] *Pyyhittyään pölyt hän imuroi.* "After dusting, he hoovered."

If the dependent is a participle, the correct type is
[`acl:partmod`](). These participal modifiers of a verb are often in
the essive case.

#### Examples

* [fi] *Huolestuneena seurasin tilanteen kehittymistä.* "Worried, I
  followed the development of the situation."

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=938> (in Finnish)
* <http://scripta.kotus.fi/visk/sisallys.php?p=1452> (in Finnish)

## Attachment issues: word-order-dependent structures and ambiguity
<!-- this section originally from TDT guidelines section 5.5 -->

Occasionally determining the correct head word for a dependency may be
difficult. Some structures are inherently ambiguous, and with some
structures, often ones involving nominal modifiers, the dependent is
most naturally seen to modify different sentence elements depending on
the word-order. The following classic example is ambiguous:

#### Examples

* [fi] *Ammuin elefantin pyjamassani.* "I shot an elephant in my pajamas."

In this example, it is possible that the shooting happened while
wearing the pajamas, in which case the correct syntax tree would be as
follows:

<!-- fname:elephant1.pdf -->
~~~ sdparse
Ammuin elefantin pyjamassani . \n I_shot an_elephant in_my_pajamas .
dobj(Ammuin-1, elefantin-2)
nmod(Ammuin-1, pyjamassani-3)
punct(Ammuin-1, .-4)
~~~

On the other hand, it is also possible that the elephant wore the
pajamas, in which case the correct analysis is:

<!-- fname:elephant2.pdf -->
~~~ sdparse
Ammuin elefantin pyjamassani . \n I_shot an_elephant in_my_pajamas .
dobj(Ammuin-1, elefantin-2)
nmod(elefantin-2, pyjamassani-3)
punct(Ammuin-1, .-4)
~~~

Ambiguities such as this one are resolved as far as possible, and also
context is used to determine the correct reading where applicable.
That is, if in the context there exists another sentence which makes
it clear whether the shooter or the elephant wore the pajamas, then
that sentence is used to disambiguate the structure.

If, however, the ambiguity cannot be resolved even given context, or
if an element seems to modify two or more elements simultaneously,
then the attachment higher in the tree is chosen. In the case of the
previous example, this would be the reading in which the shooting
happens wearing the pajamas.

In some structures, the most natural analysis may be word order
dependent. Consider the following two examples.

#### Examples

* [fi] *Mies ruskeassa takissa tuli junaan.* "A man in a brown coat
  came into the train."
* [fi] *Mies tuli junaan ruskeassa takissa.* "A man came into the
  train in a brown coat."

In the former example, there is clearly a man in a brown coat, whereas
in the latter case, the coming into the train happened while wearing a
brown coat.  Therefore, the correct analyses for these examples differ
in their attachment of the phrase in a brown coat. These attachment
rules are akin to those used in the
[Prague Dependency Treebank](https://ufal.mff.cuni.cz/pdt/Corpora/PDT_1.0/References/pdtiovam.pdf).

<!-- fname:browncoat1.pdf -->
~~~ sdparse
Mies ruskeassa takissa tuli junaan . \n Man brown in_coat came into_train .
nmod(Mies-1, takissa-3)
amod(takissa-3, ruskeassa-2)
nsubj(tuli-4, Mies-1)
nmod(tuli-4, junaan-5)
punct(tuli-4, .-6)
~~~

<!-- fname:browncoat2.pdf -->
~~~ sdparse
Mies tuli junaan ruskeassa takissa . \n Man came into_train brown in_coat .
nsubj(tuli-2, Mies-1)
nmod(tuli-2, junaan-3)
nmod(tuli-2, takissa-5)
amod(takissa-5, ruskeassa-4)
punct(tuli-2, .-6)
~~~

#### References

* Hajič 1998 [Building a Syntactically Annotated Corpus: The Prague
  Dependency Treebank](https://ufal.mff.cuni.cz/pdt/Corpora/PDT_1.0/References/pdtiovam.pdf) [pdf]

## Relative clauses
<!-- this section originally from TDT guidelines section 5.6 -->

(NOTE/TODO: the following section is originally from the TDT
documentation and has not yet been fully updated for UD. Some of
the guidelines here may not apply to UD Finnish.)

Relative clauses most often modify noun phrases, but it is also
possible for them to modify a whole clause. From a prescriptive
perspective, the relativizer that should be used in relative clauses
that modify noun phrases is *joka*, and the relative clause should
always modify the word directly before it. The relativizer that should
be used in relative clauses modifying full clauses is *mikä*. However,
in real, especially spoken, language, the use of the two relativizers
is mixed, and not every joka clause actually refers to the word
adjacent to it. In UD Finnish, the actual reference for the relative
clause is chosen as the head of the [`acl:relcl`]() dependency
wherever possible.

(**TODO**: update example to remove `rel`)

<!-- fname:relative_ungrammatical.pdf -->
~~~ sdparse
Annoin hänelle kirjan , joka sitä oli pyytänyt . \n I_gave him the_book , who it had asked_for .
nmod(Annoin-1, hänelle-2)
dobj(Annoin-1, kirjan-3)
acl:relcl(hänelle-2, pyytänyt-8)
punct(pyytänyt-8, ,-4)
rel(pyytänyt-8, joka-5)
dobj(pyytänyt-8, sitä-6)
aux(pyytänyt-8, oli-7)
punct(Annoin-1, .-9)
~~~

The relativizer is annotated with the standard syntactic role that it
plays in the relative clause, such as [nsubj]() or [dobj]().  (Note
that this treatment differs from the annotation of relative clauses in
previously proposed related schemes, which used specific dependency
types (e.g. `rel`) to mark the relativizer. In particular, in the TDT
corpus the basic dependency layer used `rel` and the second annotation
layer identified the actual syntactic role.)

(**TODO**: update example to remove `rel`)

<!-- fname:rel_projectivity1.pdf -->
~~~ sdparse
Lapsi , jonka hän sai itkemään , parkui yhä surkeasti . \n The_child , whom he made cry , wailed still miserably .
acl:relcl(Lapsi-1, sai-5)
punct(sai-5, ,-2)
rel(sai-5, jonka-3)
nsubj(sai-5, hän-4)
ccomp:nf(sai-5, itkemään-6)
punct(sai-5, ,-7)
nsubj(parkui-8, Lapsi-1)
advmod(parkui-8, yhä-9)
advmod(parkui-8, surkeasti-10)
punct(parkui-8, .-11)
~~~

(**TODO**: update example)

<!-- fname:rel_projectivity2.pdf -->
~~~ sdparse
Tuon lapsen hän sai itkemään . \n That child he made cry .
det(lapsen-2, Tuon-1)
nsubj(sai-4, hän-3)
ccomp:nf(sai-4, itkemään-5)
nsubj(itkemään-5, lapsen-2)
punct(sai-4, .-6)
~~~

Note also that the dependent of this dependency is always the
head of the relative phrase, which may or may not be the relative word
itself.

(**TODO**: update example to remove `rel`)

<!-- fname:relative_jonka.pdf -->
~~~ sdparse
Nainen , jonka auto hajosi , seisoo tuolla . \n Lady , whose car broke , stands there .
acl:relcl(Nainen-1, hajosi-5)
punct(hajosi-5, ,-2)
punct(hajosi-5, ,-6)
nmod:poss(auto-4, jonka-3)
rel(hajosi-5, auto-4)
nsubj(seisoo-7, Nainen-1)
advmod(seisoo-7, tuolla-8)
punct(seisoo-7, .-9)
~~~

## Units, measures and amounts
<!-- this section originally from TDT guidelines section 5.7 -->

There are several ways to express amounts. The most simple case is
expressing amount with numbers: *three apples*, *sixteen litres*.

<!-- fname:amount_num.pdf -->
~~~ sdparse
kolme litraa \n three litres
nummod(litraa-2, kolme-1)
~~~

The semantic head, *litraa* "litres" in the above example, is selected
as the head, and the number is marked as a numeral modifier, [`nummod`]()
(Morpho-syntactically, the number *kolme* "three" could also be
considered the head, as it determines the case used for the word
*litra* "litre"). For more information on the internal structure of
numerical expressions, see Section 5.12.

Amount can also be expressed with adverbs. This, too, is handled by
selecting the semantic head as the head of the structure, that is, the
noun.

<!-- fname:amount_advmod.pdf -->
~~~ sdparse
paljon maitoa \n a_lot_of milk
advmod(maitoa-2, paljon-1)
~~~

In addition, amount can be expressed using a nominal, often in
expressions such as *kuppi kahvia* "a cup of coffee" or *joku pojista*
lit. *someone from the boys* "one of the boys". In these cases, the
first nominal is marked as the head.

<!-- fname:amount_kuppi1.pdf -->
~~~ sdparse
Hän joi kupin kahvia . \n He drank a_cup_of coffee .
nsubj(joi-2, Hän-1)
dobj(joi-2, kupin-3)
nmod(kupin-3, kahvia-4)
punct(joi-2, .-5)
~~~

<!-- fname:amount_joku.pdf -->
~~~ sdparse
Joku pojista voisi auttaa minua . \n Someone from_boys could help me .
nmod(Joku-1, pojista-2)
nsubj(auttaa-4, Joku-1)
aux(auttaa-4, voisi-3)
dobj(auttaa-4, minua-5)
punct(auttaa-4, .-6)
~~~

These structures are considered different from the amount expressions
with numerals or adverbs, as their inflection behaves
differently. Consider the following examples.

#### Examples

* [fi] *Kieltäydyin kolme<b>sta</b> donitsi<b>sta</b>.* "I refused three doughnuts."
* [fi] *Kieltäydyin kupi<b>sta</b> kahvia.* "I refused a cup of coffee."

In the first example, both parts of the amount expression inflect as
required by the verb *kieltäytyä* "to refuse", whereas in the latter
case, only the first nominal inflects, signaling that the head, the
thing refused in this expression, is the cup.  The structure *Joku
pojista* behaves and is annotated similarly.

Two things should be noted about the above analysis of *joku pojista*
lit. *someone from the boys* "one of the boys". First, this analysis
leads to *yksi pojista* "one of the boys" being analyzed similarly to
*joku pojista* rather than *yksi poika* "one boy".

<!-- fname:amount_yksi_pojista.pdf -->
~~~ sdparse
Yksi pojista juoksi ulos . \n One from_boys ran out .
nsubj(juoksi-3, Yksi-1)
nmod(Yksi-1, pojista-2)
advmod(juoksi-3, ulos-4)
punct(juoksi-3, .-5)
~~~

Second, this analysis allows a structure like *joku pojista* to act as
a predicative, as the head of the expression is in nominative.

<!-- fname:amount_joku_pred.pdf -->
~~~ sdparse
Se oli joku pojista . \n It was someone from_boys .
nsubj:cop(joku-3, Se-1)
cop(joku-3, oli-2)
nmod(joku-3, pojista-4)
punct(joku-3, .-5)
~~~

## Noun phrases without nouns
<!-- this section originally from TDT guidelines section 5.8 -->

In UD Finnish, it is possible for a phrase with a head word other than
a noun (or pronoun) to act as a noun phrase. Typical cases of this
include adjective-headed and participle-headed noun phrases.

#### Examples

* [fi] *Ikkunan takana oli <b>jotain sinistä</b>.* "There was <b>something blue</b> behind the window".
* [fi] *<b>Kukista kaunein</b> oli punainen ruusu.* "<b>The most beautiful of the flowers</b> was a red rose."
* [fi] *<b>Kirjaa kirjoittavat</b> sanoivat samaa.* "<b>The (ones) writing a book</b> said the same."
* [fi] *<b>Onnettomuudessa olleille</b> suositeltiin terapiaa.* "Therapy was recommended for <b>the (ones) been in the accident</b>."

These structures are analyzed as standard noun phrases. For instance,
they can be marked as the subject of a clause, or a nominal modifier,
regardless of the part of speech of the head word.

<!-- fname:jotain_sinista.pdf -->
~~~ sdparse
Ikkunan takana oli jotain sinistä . \n Window behind was something blue .
case(Ikkunan-1, takana-2)
nmod(oli-3, Ikkunan-1)
nsubj(oli-3, sinistä-5)
det(sinistä-5, jotain-4)
punct(oli-3, .-6)
~~~

<!-- fname:onnettomuudessa_olleille.pdf -->
~~~ sdparse
Onnettomuudessa olleille suositeltiin terapiaa . \n In_accident been(_ones) was_recommended therapy .
nmod(olleille-2, Onnettomuudessa-1)
nmod(suositeltiin-3, olleille-2)
dobj(suositeltiin-3, terapiaa-4)
punct(suositeltiin-3, .-5)
~~~

## Comparatives and superlatives
<!-- this section originally from TDT guidelines section 5.9 -->

This section describes the annotation of comparative and superlative
structures, which, in UD Finnish, are considered to include also
certain similar structures that do not contain a comparative or
superlative wordform.

### Comparatives
<!-- this section originally from TDT guidelines section 5.9.1 -->

Structures with comparative adjectives and adverbs may be difficult
to annotate: they are often elliptical, and it may be difficult to
tell what is being compared with what. In the Finnish-specific
version of the SD scheme, there are two dependency types that are
reserved for comparative structures, `compar` and
`comparator`. Both of these types are new types not present
in the original SD scheme.

The basic usage of these two types is as follows. The comparative
adjective or adverb acts as the head for a `compar`
dependency, and *the element being compared* is its
dependent. The element being compared also acts as the head for a
`comparator` dependency, the dependent of which is a
comparative conjunction, nearly always *kuin*.

<!-- fname:comparatives.pdf -->
~~~ sdparse
Keittiö on pienempi kuin olohuone . \n Kitchen is smaller than livingroom .
nsubj-cop(pienempi-3, Keittiö-1)
cop(pienempi-3, on-2)
compar(pienempi-3, olohuone-5)
comparator(olohuone-5, kuin-4)
punct(pienempi-3, .-6)
~~~

Note that the comparative adjective or adverb remains the head of
the `compar` dependency even if the word order is such that
the dependency becomes non-projective.

<!-- fname:comparatives_non-projective.pdf -->
~~~ sdparse
Matilla on isompi auto kuin Pekalla . \n At_Matti is bigger car than Pekka .
nmod(on-2, Matilla-1)
nsubj(on-2, auto-4)
amod(auto-4, isompi-3)
compar(isompi-3, Pekalla-6)
comparator(Pekalla-6, kuin-5)
punct(on-2, .-7)
~~~

From the previous example it can also be seen that comparative
structures are often elliptical in some way. Strictly speaking, the
example does not compare Matti and Pekka, but rather their cars, and
the car owned by Pekka is not explicitly present in the sentence. As
a general rule of thumb, the different kinds of ellipsis present in
comparative structures are not marked with null tokens, but rather
the available elements are used wherever possible.

It is also possible to make comparisons without the comparative
conjunction *kuin*. In these cases, only the dependency type
`compar` is used, marking the comparative adjective or
adverb as the head, and the element compared as the dependent, just
as in the case with the comparative conjunction present.

<!-- fname:compar_no_comparator.pdf -->
~~~ sdparse
Olohuone on keittiötä suurempi . \n Livingroom is (than_)kitchen bigger .
nsubj-cop(suurempi-4, Olohuone-1)
cop(suurempi-4, on-2)
compar(suurempi-4, keittiötä-3)
punct(suurempi-4, .-5)
~~~

In TDT, also some structures not involving a comparative adjective or
adverb can be marked as comparatives. In order to qualify as a
comparative construction, a structure has to contain either a
comparative word form or a word form that otherwise semantically
entails comparison, such as _samanlainen_ "similar", _sama_ "same",
_erilainen_ "different" or _eri_ "differing, separate". (Note that for
example the word _sama_ "same" is in fact a pronoun in Finnish.)

<!-- fname:comparative_sama.pdf -->
~~~ sdparse
Luin saman kirjan kuin Pekka . \n I_read same book as Pekka .
dobj(Luin-1, kirjan-3)
det(kirjan-3, saman-2)
compar(saman-2, Pekka-5)
comparator(Pekka-5, kuin-4)
punct(Luin-1, .-6)
~~~

An additional difficulty is posed by the fact that in Finnish, the
comparative conjunction _kuin_ can also appear as a subordinating
conjunction as well as an adverb. Borderline situations are resolved
on a case-by-case basis, considering whether or not there is a
comparison involved in the structure and, secondarily, whether the
dependent structure is a clause. (Comparative structures can also
occasionally be full clauses.)

### Superlatives
<!-- this section originally from TDT guidelines section 5.9.2 -->

Superlatives are less problematic than comparatives but deserve some
attention nevertheless. The basic case with superlatives is simple:
a lone superlative modifying a noun. The superlative form in this
case is not marked in any particular way in the syntax annotation,
but the structure is annotated similarly to any adjective modifying
a noun. The same strategy of not marking the superlative in any
particular way is also used in cases where the superlative acts as a
predicative.

<!-- fname:superlative_basic.pdf -->
~~~ sdparse
Suurin paketti oli muiden takana . \n Biggest package was others behind .
amod(paketti-2, Suurin-1)
nsubj(oli-3, paketti-2)
nmod(oli-3, muiden-4)
case(muiden-4, takana-5)
punct(oli-3, .-6)
~~~

Often a superlative is modified by nominal in some manner. A very
common phenomenon is a genitive modifier modifying a superlative.
For instance, in an expression such as

<!-- fname:super1.pdf -->
~~~ sdparse
Suomen paras kokki \n Finland's best cook
poss(paras-2, Suomen-1)
amod(kokki-3, paras-2)
~~~

the cook is the best *of those in/of Finland* and thus the correct
head word for the genitive modifier is _paras_ "best". Similarly, an
ordinal number can act as the head of a genitive modifier. For
example, in

<!-- fname:super2.pdf -->
~~~ sdparse
Virtasen kuudes mestaruus \n Virtanen's sixth championship
poss(kuudes-2, Virtasen-1)
num(mestaruus-3, kuudes-2)
~~~

the championship is the sixth out of *those of Virtanen*, and thus the
genitive modifier should modify the ordinal number.

However, it is still possible for the noun to act as the head word in
some cases. For instance, in

<!-- fname:super3.pdf -->
~~~ sdparse
Rusakon pahin vihollinen \n The_hare's worst enemy
poss(vihollinen-3, Rusakon-1)
amod(vihollinen-3, pahin-2)
~~~

the enemy is not the worst *of the hare*, but rather it is an enemy of
the hare, and it is the worst enemy. Thus, the head word should be
*hare*.

As a rule of thumb, if the noun phrase containing the genitive
modifier can be turned into a copular clause in the following
fashion, then the genitive modifier should modify the superlative or
ordinal number.

#### Examples

* [fi] _Kokki on Suomen paras_ "The cook is the best in Finland"
* [fi] _Mestaruus on Virtasen kuudes_ "The championship is the sixth for Virtanen"

are perfectly valid, but

#### Examples

* [fi] ?_Vihollinen on rusakon pahin_ ?"The enemy is the worst of
  the hare"

is questionable at best. Thus, in _Suomen paras kokki_ and _Virtasen
kuudes mestaruus_, the genitive modifier is considered to modify the
superlative adjective, but in _rusakon pahin vihollinen_, it is
considered to modify the noun directly.

In this context, it should also be noted that in addition to
superlatives, also certain other adjectives can also act as the head
of a genitive modifier. These adjectives can be semantically
superlative-like _viimeinen_ "last", but there are also many others,
such as _oma_ "own", _kaltainen_ "-like", _välinen_ "between (adj.)",
and _vastainen_ "against (adj.)".

Also other nominal modifiers are possible, expressing the set of
beings from which the objects are drawn when making the
comparison. These are treated similarly to the genitive modifiers,
making the superlative wordform the head of the modifier if the
modifier expresses the set of beings to draw from.

<!-- fname:superlative_nommod.pdf -->
~~~ sdparse
Kukista kaunein oli ikkunalaudalla . \n From_the_flowers most_beautiful was on_windowsill .
nmod(kaunein-2, Kukista-1)
nsubj(oli-3, kaunein-2)
nmod(oli-3, ikkunalaudalla-4)
punct(oli-3, .-5)
~~~

Note how in the previous example the phrase _kukista kaunein_ can act
as a noun phrase (it is the subject of the clause), even though its
head word is an adjective.

<!-- TODO See Section~\ref{sec-NP-no-N} on nounless noun phrases.-->

## Subordinate clauses and expressions of time
<!-- this section originally from TDT guidelines section 5.10 -->

Many subordinate clauses, especially ones starting with the
conjunction *kun* "when", come with an adverbial, usually expressing
time. Consider the following examples.

#### Examples

* [fi] *Tulen sinne heti, kun olen imuroinut.* "I'll come there right
  away, when I have hoovered."
* [fi] *Tapasin hänet sen jälkeen kun olin tullut kaupasta.* "I met
  him after I had come from the store."

It is often unclear where these time adverbials should be attached. On
the one hand, they seem to modify the main clause, expressing when the
action of the main clause takes place. On the other hand, they could
also modify the subordinate clause, being a part of the time condition
given in the subordinate clause.  A third option would be to make the
time adverbial depend on the subordinating conjunction, to make the
whole expression a two-part conjunction. The third option has some
intuitive appeal, but this would make the number of subordinating
conjunctions excessively large.

In UD Finnish, a very limited number of these cases are considered
especially tightly bound with the subordinating conjunction. These
cases are considered multi-part subordinating conjunctions and listed
as such in the documentation for [mark](). Otherwise, these adverbials
are consistently made dependents of the subordinate clause.

<!-- fname:subordinate+time_adverbial.pdf -->
~~~ sdparse
Tulen sinne heti , kun pääsen . \n I_will_come there right_away , when I_can .
advmod(Tulen-1, sinne-2)
advcl(Tulen-1, pääsen-6)
advmod(pääsen-6, heti-3)
punct(pääsen-6, ,-4)
mark(pääsen-6, kun-5)
punct(Tulen-1, .-7)
~~~

However, it should be noted that all subordinate clauses themselves
are not dependents of the main verb. As discussed in the documentation
for [ccomp](), clausal complements can depend on nouns, pronouns or
adverbs. Similar situations can occur with subordinate clauses that
are modifiers, and they are also analyzed similarly. Most commonly
this occurs with the pronoun *se* "it".

<!-- fname:se_kun.pdf -->
~~~ sdparse
Hänet säikäytti se , kun poika putosi hevosen selästä . \n Him scared it , when boy fell horse's from_back .
dobj(säikäytti-2, Hänet-1)
nsubj(säikäytti-2, se-3)
advcl(se-3, putosi-7)
punct(putosi-7, ,-4)
mark(putosi-7, kun-5)
nsubj(putosi-7, poika-6)
nmod(putosi-7, selästä-9)
nmod:poss(selästä-9, hevosen-8)
punct(säikäytti-2, .-10)
~~~

## Subjects and objects of a noun
<!-- this section originally from TDT guidelines section 5.11 -->

In Finnish, it is possible for certain nouns which either are direct
derivations of a verb or otherwise have a verb counterpart
(verbivastineellinen substantiivi
[ISK §560](http://scripta.kotus.fi/visk/sisallys.php?p=560); in
Finnish) to take a subject- or object-like complement. Both of these
are identical in form to more general genitive modifiers of a noun,
marked with the dependency type [`nmod:poss`]() in the UD Finnish
scheme.

<!-- fname:regular_poss.pdf -->
~~~ sdparse
talon katto \n house(gen.) roof(N)
nmod:poss(katto-2, talon-1)
~~~

Genitive objects of a noun are marked the [`nmod:gobj`](), which is a
subtype for the more general genitive-modifier type [`nmod:poss`]().
Both nominal derivations and other nouns with verb counterparts can
take a genitive object, with the exception of JA- derivations, the
genitive modifier of which is never considered an object in UD Finnish
(*talon rakentaja* "the builder of the house").

<!-- fname:gobj_vs_poss.pdf -->
~~~ sdparse
talon rakentaminen \n house(gen.) building(N+deriv.)
nmod:gobj(rakentaminen-2, talon-1)
~~~

Genitive subjects, in turn, are marked using the [`nmod:gsubj`]()
dependency type, also a subtype of [`nmod:poss`](). Only nouns that
are marked as derivations of a verb in the morphological tagging
receive a [`nmod:gsubj`]() dependent.

<!-- fname:gsubj_vs_poss.pdf -->
~~~ sdparse
maljakon putoaminen \n vase(gen.) falling(N+deriv.)
nmod:gsubj(putoaminen-2, maljakon-1)
~~~

#### References

* <http://scripta.kotus.fi/visk/sisallys.php?p=560> (in Finnish)

---
layout: base
title:  'Syntax'
permalink: fi/overview/extra.html
---

# Extra material

This page contains material from the TDT guidelines that has not yet
been incorporated into the primary UD Finnish documentation. The
following should *not* be considered part of the UD Finnish
guidelines.

---

## `rel` (relativizer)
<!-- this section originally from TDT guidelines section 2.44 -->

(The following section was lifted from the TDT documentation for
`rel`, which is removed in UD Finnish. See
<https://github.com/UniversalDependencies/docs/issues/73> for more
information.)

In TDT, the *relativizer* (`rel`) is the head of the phrase containing
the relative pronoun (or other relative word). Most often, but not
always, this is the relative word itself. The governor of the
dependency is the main predicate of the relative clause.

For UD Finnish, relative markers are be mapped to the syntactic role
that the relative is playing in the relative clause, such as `nsubj`
or `dobj`. This information is present in the second annotation layer
of the TDT corpus.

<!-- TODO Annotation of relative clauses is more closely examined in Section [relclauses](#sec-relclauses). -->

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_basic.pdf -->
~~~ sdparse
Auto , joka ohitti meidät , ajoi hyvin nopeasti . \n The_car , which passed us , drove very fast .
acl:relcl(Auto-1, ohitti-4)
punct(ohitti-4, ,-2)
rel(ohitti-4, joka-3)
dobj(ohitti-4, meidät-5)
punct(ohitti-4, ,-6)
nsubj(ajoi-7, Auto-1)
advmod(ajoi-7, nopeasti-9)
advmod(nopeasti-9, hyvin-8)
punct(ajoi-7, .-10)
~~~

**NOTE**: this is TDT example using `rel`, not a UD Finnish example.

<!-- fname:rel_phrase.pdf -->
~~~ sdparse
Nainen , jonka auto hajosi , pyysi apuamme . \n The_lady , whose car broke , asked_for our_help .
acl:relcl(Nainen-1, hajosi-5)
punct(hajosi-5, ,-2)
nmod:poss(auto-4, jonka-3)
rel(hajosi-5, auto-4)
punct(hajosi-5, ,-6)
nsubj(pyysi-7, Nainen-1)
dobj(pyysi-7, apuamme-8)
punct(pyysi-7, .-9)
~~~

## The null token
<!-- this section originally from TDT guidelines section 2.47 -->

The *null token* is not a dependency type, but an extra token that is
added into the sentence to represent a missing token. A null token is
only added when the missing token is required in order to construct an
analysis, that is, when it governs another token that is present in
the sentence. Thus, for instance copulas and auxiliaries are not
represented by null tokens when absent, because if they are absent,
their dependents are as well. The null token is most commonly, but not
always, a verb.

There are two basic uses for the null token. First, it is used in
*fragments*: sentences or clauses with an omitted main predicate.

<!-- fname:null_fragment.pdf -->
~~~ sdparse
Presidentti *null* Kiinaan solmimaan sopimusta . \n The_president *null* to_China to_make a_deal .
nsubj(*null*-2, Presidentti-1)
nmod(*null*-2, Kiinaan-3)
xcomp(*null*-2, solmimaan-4)
dobj(solmimaan-4, sopimusta-5)
punct(*null*-2, .-6)
~~~

Second, the null token is used in *gapping*, a type of *ellipsis*
where a head word has been omitted to avoid repetition. Gapping is the
only type of ellipsis marked with null tokens, as according to the
definition of a null token, only words required for constructing an
analysis should be represented by one.

<!-- fname:null_ellipsis.pdf -->
~~~ sdparse
Matti tilasi jäätelön ja Pekka *null* leivoksen . \n Matti ordered ice_cream and Pekka *null* cake .
nsubj(tilasi-2, Matti-1)
dobj(tilasi-2, jäätelön-3)
cc(tilasi-2, ja-4)
conj(tilasi-2, *null*-6)
nsubj(*null*-6, Pekka-5)
dobj(*null*-6, leivoksen-7)
punct(tilasi-2, .-8)
~~~

---

# Conjunct propagation and additional dependencies
<!-- this section originally from TDT guidelines section 3 -->

This section describes four phenomena that are annotated in the second
annotation layer of TDT, termed the *conjunct propagation and
additional dependencies* layer. These phenomena are *the propagation
of conjunct dependencies*, *external subjects*, *syntactic functions
of relativizers* and *gapping*. The annotation of this layer is added
on top of the first layer, meaning that the analyses are no longer
trees.

## Conjunct propagation
<!-- this section originally from TDT guidelines section 3.1 -->

The SD scheme analyzes coordinations so that the first coordinated
element is the head of the whole coordination.

**FIGURE MISSING**

In this analysis alone, it is not possible to distinguish dependents
and governors of the first coordinated element from those of the whole
coordination, nor from elements that depend on or govern some but not
all conjuncts. Therefore in the extended variants of the SD scheme,
this distinction is made explicit with additional dependencies on top
of the tree structure. That is, if an element modifies or governs
multiple coordinated elements, it should be *propagated* to them. In
principle, any dependency type introduced in Sections 2 and 3, with
the exceptions of [`punct`](), [`conj`](), [`cc`]() and
[`ellipsis`](), can propagate in the second layer of annotation. Note
especially that the dependencies introduced in the second layer, that
is, external subjects and syntactic functions of relativizers, are
also allowed to propagate.

<!-- fname:propagation.pdf -->
~~~ sdparse
Tultuaan kotiin Maija söi ensin lounaan ja imuroi sitten . \n After_coming home Maija ate first lunch and hoovered then .
nmod(Tultuaan-1, kotiin-2)
advcl(söi-4, Tultuaan-1)
nsubj(söi-4, Maija-3)
advmod(söi-4, ensin-5)
dobj(söi-4, lounaan-6)
cc(söi-4, ja-7)
conj(söi-4, imuroi-8)
advmod(imuroi-8, sitten-9)
punct(söi-4, .-10)
advcl(imuroi-8, Tultuaan-1)
nsubj(imuroi-8, Maija-3)
~~~

In addition to simply propagating to other coordinated elements, it is
possible for a dependency to change its type while doing so. This may
happen in coordinations of elements with differing parts-of-speech,
and cases where a sentence element acts in one syntactic role for the
first conjunct and in an another role for some other conjunct.

<!-- fname:propagation_typechange.pdf -->
~~~ sdparse
Pieni ja savuttava nuotio paloi yön ja sammutettiin sitten . \n Small and smoking bonfire burned for_night and was_extinguished then .
amod(nuotio-4, Pieni-1)
cc(Pieni-1, ja-2)
conj(Pieni-1, savuttava-3)
nsubj(paloi-5, nuotio-4)
nmod(paloi-5, yön-6)
cc(paloi-5, ja-7)
conj(paloi-5, sammutettiin-8)
nmod(sammutettiin-8, sitten-9)
punct(paloi-5, .-10)
acl:partmod(nuotio-4, savuttava-3)
dobj(sammutettiin-8, nuotio-4)
~~~

## External subjects (xsubj)
<!-- this section originally from TDT guidelines section 3.2 -->

Open clausal complements, as discussed in Section 2.46, share their
subject with another verb. The fact that the subject of the main verb
is also the subject of the complement cannot be annotated on the first
layer of TDT, as this would violate the treeness restriction.
Therefore, these subjects are marked on the second layer of annotation
using the dependency types [`xsubj`]() (*external subject*) and
[`xsubj-cop`]() (*external copular subject*). Note also that an open
clausal complement may not always have a subject, in for instance
passive constructions.

<!-- fname:xsubj.pdf -->
~~~ sdparse
Matti ryhtyi lukemaan . \n Matti started_to read .
nsubj(ryhtyi-2, Matti-1)
xcomp(ryhtyi-2, lukemaan-3)
punct(ryhtyi-2, .-4)
xsubj(lukemaan-3, Matti-1)
~~~

External subjects interact with conjunct propagation in two ways: an
external subject may propagate, and also a propagated [`nsubj`]()
dependency may be the source of a new [`xsubj`]() dependency.

<!-- fname:xsubj_propagation1.pdf -->
~~~ sdparse
Matti ryhtyi lukemaan ja kirjoittamaan . \n Matti started_to read and write .
nsubj(ryhtyi-2, Matti-1)
xcomp(ryhtyi-2, lukemaan-3)
punct(ryhtyi-2, .-6)
cc(lukemaan-3, ja-4)
conj(lukemaan-3, kirjoittamaan-5)
xsubj(lukemaan-3, Matti-1)
xsubj(kirjoittamaan-5, Matti-1)
~~~

<!-- fname:xsubj_propagation2.pdf -->
~~~ sdparse
Matti luki ja ryhtyi kirjoittamaan . \n Matti read and started_to write .
nsubj(luki-2, Matti-1)
punct(luki-2, .-6)
cc(luki-2, ja-3)
conj(luki-2, ryhtyi-4)
xcomp(ryhtyi-4, kirjoittamaan-5)
nsubj(ryhtyi-4, Matti-1)
xsubj(kirjoittamaan-5, Matti-1)
~~~

## Syntactic functions of relativizers
<!-- this section originally from TDT guidelines section 3.3 -->

Relativizers, that is, the phrases containing the relative word are
marked as such in the base layer of annotation, using the dependency
type [`rel`]() (see Section 2.44).  However, the relativizers also
always have a secondary syntactic function, such as a subject, which
cannot be marked on the base layer of annotation due to the treeness
restriction. Therefore these functions are marked on the *conjunct
propagation and additional dependencies* layer on top of the tree
structure. In principle any dependency type from Section 2 may
represent the syntactic function of a relativizer, although in
practice certain types (such as [`punct`]()) will not do so.

<!-- fname:rel_secondary.pdf -->
~~~ sdparse
Auto , joka ohitti meidät , ajoi hyvin nopeasti . \n The_car , which passed us , drove very fast .
nsubj(ajoi-7, Auto-1)
punct(ajoi-7, .-10)
advmod(ajoi-7, nopeasti-9)
advmod(nopeasti-9, hyvin-8)
acl:relcl(Auto-1, ohitti-4)
punct(ohitti-4, ,-2)
punct(ohitti-4, ,-6)
rel(ohitti-4, joka-3)
nsubj(ohitti-4, joka-3)
~~~

Relativizers and their secondary functions may propagate in
coordinations, and if the dependencies are between the same tokens
(see Section 5.6 for discussion of cases where they are not), they
will propagate together.

<!-- fname:rel_propagation.pdf -->
~~~ sdparse
Mies , joka puhui ja puhui , oli serkkuni . \n The_man , who talked and talked , was my_cousin .
nsubj:cop(serkkuni-9, Mies-1)
cop(serkkuni-9, oli-8)
punct(serkkuni-9, .-10)
punct(puhui-4, ,-2)
punct(puhui-4, ,-7)
rel(puhui-4, joka-3)
cc(puhui-4, ja-5)
conj(puhui-4, puhui-6)
nsubj(puhui-4, joka-3)
rel(puhui-6, joka-3)
nsubj(puhui-6, joka-3)
~~~

If the syntactic function of a relativizer is a subject, the
relativizer may also act as an external subject to another verb.

<!-- fname:rel_xsubj.pdf -->
~~~ sdparse
mies , joka ryhtyi laulamaan \n the_man , who started_to sing
acl:relcl(mies-1, ryhtyi-4)
punct(ryhtyi-4, ,-2)
rel(ryhtyi-4, joka-3)
xcomp(ryhtyi-4, laulamaan-5)
nsubj(ryhtyi-4, joka-3)
xsubj(laulamaan-5, joka-3)
~~~

## Gapping (ellipsis of a head word)
<!-- this section originally from TDT guidelines section 3.4 -->

As described in Section 2.47, gapping in TDT is marked by inserting a
so called null token to represent the omitted token. In addition, the
second layer annotation uses the dependency type [`ellipsis`]() to
mark the elided word so that the null token acts as the dependent, and
the governor is the non-elided occurrence of the word (Note that the
elided word can also precede the non-elided occurrence).

Note that according to the policy of only inserting a null token where
necessary for constructing an analysis (see Section 2.47), gapping is
the only form of ellipsis marked using null tokens and [`ellipsis`]()
dependencies in TDT. Some other elliptical structures may be less
explicitly marked as *conjunct propagation* (see Section 3.1).

**FIGURE MISSING**

# Differences between the Finnish and English versions of the SD scheme
<!-- this section originally from TDT guidelines section 4 -->

The original SD scheme by de Marneffe and Manning includes in total 55
dependency types arranged in a hierarchy; excluding six intermediate
types that are not meant to be used if a more specific type can be
selected, the total number of dependency types is 49. The
Finnish-specific scheme version used in this work includes 46
dependency types in the base layer and 3 additional types in the
conjunct propagation and additional dependencies layer. This section
discusses the differences between the two scheme versions. Figure 1
shows the original SD type hierarchy as described in the SD scheme
manual, and Figure 2 the hierarchy of the Finnish-specific version.

To maintain a hierarchy similar to the original one, Figure 2 includes
four intermediate types which have not been introduced above and are
not used in TDT: [`arg`]() (argument), [`comp`]() (complement),
[`subj`]() (subject) and [`mod`]() (modifier). This makes the overall
number of types in the Finnish SD scheme 53.

## New dependency types in Finnish-specific SD
<!-- this section originally from TDT guidelines section 4.2 -->

(Parts of the content of this section are now found
[here](syntax.html#new-dependency-relations))

<!-- not applicable in comparison to UD
First, two new dependency types were needed to accommodate the similar
handling of nominal modifiers and adpositional phrases: [`nmod`]() and
[`case`](), both under the [`modifier`]() subcategory.  It should be
noted that although [`nmod`]() is considered a modifier type, many
nominal modifiers in the treebank are at least borderline complements,
due to the fact that many Finnish verbs take inflected nominals as
their arguments.
-->

<!-- 2nd layer only -->
Also we have moved the existing [`xsubj`]() type from under the
[`sdep`]() category to under the [`subject`]() category, and added a
new subtype for [`xsubj`](), [`xsubj-cop`]().  The external subject
types are part of the *conjunct propagation and additional
dependencies* layer of the treebank.

<!-- new wrt SD but not UD -->
The type [`vocative`]() is introduced to be able to analyze
*vocatives*, and the type [`discourse`]() is for *interjections*. Both
vocatives and interjections are fairly common in more informal genres,
such as blog text.

<!-- 2nd layer only -->
The type [`ellipsis`]() is part of the *conjunct propagation and
additional dependencies* layer and used to mark the elided word in
gapping.

## Hierarchy changes
<!-- this section originally from TDT guidelines section 4.3 -->

Finally, there are two minor changes made in the SD hierarchy. First,
as prepositional objects are no longer needed in the Finnish-specific
scheme due to the changes made to handling adpositional phrases, and
as indirect objects do not occur in Finnish, the type [`dobj`]() was
the sole subtype of the intermediate, unused type [`obj`](), we have
removed this intermediate type, and made [`dobj`]() a direct subtype
of [`complement`]().

Second, the [`neg`]() dependency type, for marking negations, has been
moved from under adverbial modifiers to under auxiliaries in the
hierarchy. This is because in Finnish, the negation word ei is in most
contexts a verb and acts in an auxiliary-like manner. It should be
noted, however, that in TDT there are few cases where it is considered
that for instance a noun phrase has been negated or where *ei*
functions as the counterpart of *kyllä* "yes", and is thus an adverb.

# Annotating phenomena of Finnish
<!-- this section originally from TDT guidelines section 5 -->

This section gives detailed instructions on annotating certain common
phenomena that require detailed decision rules.

## Comparatives and superlatives
<!-- this section originally from TDT guidelines section 5.9 -->

(The content of this section of the guidelines is found
[here](specific-syntax.html).)

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
as such in Section 2.26. Otherwise, these adverbials are consistently
made dependents of the subordinate clause.

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
are not dependents of the main verb. As discussed in Section 2.10,
clausal complements can depend on nouns, pronouns or adverbs. Similar
situations can occur with subordinate clauses that are modifiers, and
they are also analyzed similarly. Most commonly this occurs with the
pronoun *se* "it".

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
(verbivastineellinen substantiivi [ISK, §560]) to take a subject- or
object-like complement. Both of these are identical in form to more
general genitive modifiers of a noun, marked with the dependency type
[`nmod:poss`]() in the UD Finnish scheme.

<!-- fname:regular_poss.pdf -->
~~~ sdparse
talon katto \n house(gen.) roof(N)
nmod:poss(katto-2, talon-1)
~~~

Genitive objects of a noun are marked the [`nmod:gobj`](), which is a
subtype for the more general genitive-modifier type [`nmod:poss`](). Both
nominal derivations and other nouns with verb counterparts can take a
genitive object, with the exception of JA- derivations, the genitive
modifier of which is never considered an object in UD Finnish (*talon
rakentaja* "the builder of the house").

<!-- fname:gobj_vs_poss.pdf -->
~~~ sdparse
talon rakentaminen \n house(gen.) building(N+deriv.)
nmod:gobj(rakentaminen-2, talon-1)
~~~

Genitive subjects, in turn, are marked using the [`nmod:gsubj`]()
dependency type, also a subtype of [`nmod:poss`](). Only nouns that are
marked as derivations of a verb in the morphological tagging receive a
[`nmod:gsubj`]() dependent.

<!-- fname:gsubj_vs_poss.pdf -->
~~~ sdparse
maljakon putoaminen \n vase(gen.) falling(N+deriv.)
nmod:gsubj(putoaminen-2, maljakon-1)
~~~

## Numerical expressions
<!-- this section originally from TDT guidelines section 5.12 -->

The dependency type [`compound`]() is used for numerical
expressions. Generally, with multi-token numerical expressions, the
rightmost token of the expression is considered the head and the
dependencies are chained.

<!-- fname:number.pdf -->
~~~ sdparse
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj:cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
compound(--5, 3-4)
compound(5-6, --5)
punct(5-6, .-7)
~~~

However, it is possible that rather complex expressions are considered
numerical, and in these cases the structure of the expression is also
marked, showing the parts of which the expression consists. Often
these complex expressions involve dates, which are also considered
numerical expressions in UD Finnish.

<!-- fname:number_complex.pdf -->
~~~ sdparse
3. joulukuuta 1510 - 15. kesäkuuta 1579 \n 3rd December 1510 to 15th June 1579
compound(joulukuuta-2, 3.-1)
compound(1510-3, joulukuuta-2)
compound(--4, 1510-3)
compound(1579-7, --4)
compound(kesäkuuta-6, 15.-5)
compound(1579-7, kesäkuuta-6)
~~~

Dates can be expressed using many different forms, and all full dates
are considered numerical expressions in UD Finnish, also those where
some or all parts of the date are written with characters. Even
partial dates such as

<!-- fname:3_joulukuuta.pdf -->
~~~ sdparse
3. joulukuuta \n 3rd December
compound(joulukuuta-2, 3.-1)
~~~

are considered numerical expressions. However, year expressions such
as the following are not considered dates in UD Finnish, and thus not
complex numerical expressions.

<!-- fname:vuonna_1996.pdf -->
~~~ sdparse
sanoi vuonna 1996 \n said in_the_year 1996
nmod(sanoi-1, vuonna-2)
nummod(vuonna-2, 1996-3)
~~~

<!-- fname:kesalla_1972.pdf -->
~~~ sdparse
tapahtui kesällä 1972 \n happened in_the_summer 1972
nmod(tapahtui-1, kesällä-2)
nummod(kesällä-2, 1972-3)
~~~

If a date expression has a clear internal syntactic structure, this
structure is annotated instead of the default chain of [`compound`]()
dependencies.

<!-- fname:syyskuun_3_ja_4_paiva.pdf -->
~~~ sdparse
syyskuun 3. ja 4. päivä \n September's 3rd and 4th day
nmod:poss(3.-2, syyskuun-1)
cc(3.-2, ja-3)
conj(3.-2, 4.-4)
nummod(päivä-5, 3.-2)
~~~

If a date has a more specific time (such as *kello kuudelta* "at six
o'clock") attached to it, the date is considered the head of the
expression, and the more specific time depends on it. Clock
expressions, alone or in conjunction with a date, are not considered
dates or numerical expressions in UD Finnish.

<!-- fname:6_joulukuuta_kello18.pdf -->
~~~ sdparse
6. joulukuuta kello 18 \n 6th December o'clock 18
compound(joulukuuta-2, 6.-1)
nmod(joulukuuta-2, kello-3)
nummod(kello-3, 18-4)
~~~

In addition to dates, there is one more case of numerical expressions
that deserves attention: numerical expressions with multiple units. If
a single amount expression involves multiple units, the units are
considered a compound unit so to say, and combined using the
dependency type [`compound:nn`]().

<!-- fname:compound_unit.pdf -->
~~~ sdparse
2 kg 315 g
nummod(kg-2, 2-1)
compound:nn(g-4, kg-2)
nummod(g-4, 315-3)
~~~

In rare cases, however, the previous situation may occur with the
rightmost part of the expression lacking the unit. These cases are
annotated flatly as numerical expressions, with no compound units.

<!-- fname:no_compound_unit.pdf -->
~~~ sdparse
2 kg 315
compound(kg-2, 2-1)
compound(315-3, kg-2)
~~~

## Participal modifiers and predicatives
<!-- this section originally from TDT guidelines section 5.13 -->

In connection with participal modifiers, predicatives are given a
slightly different treatment than in other contexts. In a regular
copular clause, the analysis is as follows.

<!-- fname:pcp+cop1.pdf -->
~~~ sdparse
Eeva on raskaana . \n Eeva is pregnant .
nsubj:cop(raskaana-3, Eeva-1)
cop(raskaana-3, on-2)
punct(raskaana-3, .-4)
~~~

However, if the same analysis were applied in a situation where olla
acts as a participal modifier, this would result in a non-tree
structure:

Raskaana oleva nainen on nälkäinen . \n Pregnant being woman is hungry .
cop(Raskaana-1, oleva-2)
nsubj:cop(Raskaana-1, nainen-3)
nsubj:cop(nälkäinen-5, nainen-3)
cop(nälkäinen-5, on-4)
punct(nälkäinen-5, .-6)
~~~

Therefore, in conjunction with participal modifiers, copular verbs are
analyzed similarly to regular verbs, in order to avoid non-tree
structures.

<!-- fname:pcp+cop3.pdf -->
~~~ sdparse
Raskaana oleva nainen on nälkäinen . \n Pregnant being woman is hungry .
advmod(oleva-2, Raskaana-1)
acl:partmod(nainen-3, oleva-2)
nsubj:cop(nälkäinen-5, nainen-3)
cop(nälkäinen-5, on-4)
punct(nälkäinen-5, .-6)
~~~

The same rule is applied to certain special constructions that are
normally considered passive structures but can also appear in
conjunction with participal modifiers. Here the application of the
rule results in two chained participal modifiers.

<!-- fname:pcp+pass1.pdf -->
~~~ sdparse
Resurssit ovat käytettävissä . \n Resources are usable .
dobj(käytettävissä-3, Resurssit-1)
auxpass(käytettävissä-3, ovat-2)
punct(käytettävissä-3, .-4)
~~~

<!-- fname:pcp+pass2.pdf -->
~~~ sdparse
Käytettävissä olevat resurssit ovat rajalliset . \n Usable being resources are limited .
acl:partmod(olevat-2, Käytettävissä-1)
acl:partmod(resurssit-3, olevat-2)
nsubj:cop(rajalliset-5, resurssit-3)
cop(rajalliset-5, ovat-4)
punct(rajalliset-5, .-6)
~~~

## Necessive structures and clausal subjects
<!-- this section originally from TDT guidelines section 5.14 -->

A clause can act as a subject to another clause (as well as an object,
but these are marked as clausal complements, [`ccomp`]()), in which
case it should be marked as a clausal subject, [`csubj`](), or, if the
main clause is copular, a clausal copular subject,
[`csubj:cop`](). However, in the case of clausal-copular subject, it
may be difficult to determine whether a clause is, in fact, the
subject of another clause, as the construct is similar to that of a
*necessive structure*. Consider the following example.

#### Examples

* [fi] *On tärkeää syödä hyvin.* "It is important to eat well."

At first glance, it seems that the clause *syödä hyvin* is the subject
of *on tärkeää*. However, in UD Finnish, this is not considered a
clausal subject. Instead, it is considered a necessive structure, as
*on tärkeää* can be given a subject in the genitive form:

#### Examples

* [fi] *Hänen on tärkeää syödä hyvin.* "It is important for him to eat
  well."

The whole structure is considered a single unit, and the genitive
subject is considered the subject of the latter verb (which expresses
what it is that is necessary).

<!-- fname:necessive.pdf -->
~~~ sdparse
Hänen on pakko mennä kotiin . \n He has to go home .
nsubj(mennä-4, Hänen-1)
cop(pakko-3, on-2)
ccomp:nf(pakko-3, mennä-4)
nmod(mennä-4, kotiin-5)
punct(pakko-3, .-6)
~~~

The name *necessive structure* comes from the fact that these
structures often express the necessity of doing something, but it does
not mean that all of these structures would have such a meaning; for
example, *on vaikea(a)* "it is difficult" is a necessive structure the
meaning of which does not express necessity. Common necessive
structures include expressions such as *on pakko*, *on tärkeää*, *on
oleellista* and *on välttämätöntä*. They usually, but not always,
involve the verb *olla* and an adjective. There are also some verbs,
such as *kannattaa* "be worth it" and *kuulua* "be supposed to", that
are analyzed in a necessive manner.

**FIGURE MISSING**

If it is not possible to insert a genitive subject into the clause,
then the structure is considered a clausal subject case.

#### Examples

* [fi] \**Hänen on mahtavaa käydä ulkona.* "It is splendid for him to
  go out." (the Finnish sentence is ungrammatical.)

<!-- fname:not_necessive.pdf -->
~~~ sdparse
On mahtavaa mennä ulos . \n (it)_is splendid to_go out .
cop(mahtavaa-2, On-1)
csubj:cop(mahtavaa-2, mennä-3)
advmod(mennä-3, ulos-4)
punct(mahtavaa-2, .-5)
~~~

Note that due to the copular nature of the main clause, the clausal
subjects in these clauses which resemble necessive structures are in
fact clausal copular subjects. There are also other clausal subjects
which cannot be confused with necessive structures.

<!-- fname:csubj.pdf -->
~~~ sdparse
Hänen aikomuksenaan oli mennä ulos . \n His intention(essive) was to_go out .
nmod:poss(aikomuksenaan-2, Hänen-1)
nmod(oli-3, aikomuksenaan-2)
csubj(oli-3, mennä-4)
advmod(mennä-4, ulos-5)
punct(oli-3, .-6)
~~~

## Passive structures and zeroth person constructions
<!-- this section originally from TDT guidelines section 5.15 -->

The Finnish language has two notable cases of subjectless expressions:
the passive voice and the zeroth person. In most cases, distinguishing
these two is rather simple, as the zeroth person uses the same verb
forms as the third person, whereas there is a morphological passive
form that is used in constructions considered passive. However, there
are at least two particular phenomena that deserve special attention.
First, the *on tehtävä* -structure is worth examining:

#### Examples

* [fi] *Tämä työ on tehtävä tänään.* "This work has to be done today."

The form *tehtävä* is morphologically a passive participle of the verb
*tehdä* "to do". Still, *on tehtävä* can take a subject, which could
perhaps point towards to the subjectless version being zeroth person
after all.

#### Examples

* [fi] *Matin on tehtävä työ tänään.* "Matti has to do the work today."

In UD Finnish, we use the presence or absence of a subject as a cue to
whether the structure is passive or not. If a subject is present, the
structure is marked as an active construction, and if not, it is
assumed to be passive.

<!-- fname:tehtava1.pdf -->
~~~ sdparse
Tämä työ on tehtävä tänään . \n This work has_to_be done today .
det(työ-2, Tämä-1)
dobj(tehtävä-4, työ-2)
auxpass(tehtävä-4, on-3)
advmod(tehtävä-4, tänään-5)
punct(tehtävä-4, .-6)
~~~

<!-- fname:tehtava2.pdf -->
~~~ sdparse
Matin on tehtävä työ tänään . \n Matti has_to do work today .
nsubj(tehtävä-3, Matin-1)
aux(tehtävä-3, on-2)
dobj(tehtävä-3, työ-4)
advmod(tehtävä-3, tänään-5)
punct(tehtävä-3, .-6)
~~~

Second, the *on tehtävissä* structure deserves a mention. Similarly to
*tehtävä*, *tehtävissä* is a passive verb participle - in fact, the
difference between the two forms is only that *tehtävissä* is the
plural inessive form of the base participle *tehtävä*. The annotation
of on tehtävissä follows a strategy similar to the previous one. In
general, it is assumed that the structure is passive.

**FIGURE MISSING**

Unlike on tehtävä, on tehtävissä cannot take a genitive form subject:

#### Examples

* [fi] \**Minun on tehtävissä tämä.* "\*I this is doable."

However, in some cases it is possible to attach a possessive suffix to
the participle and use a corresponding personal pronoun as a nominal
modifier (this is a rare phenomenon and not seen with many
verbs). This case is analyzed as an active structure.

**FIGURE MISSING**

However, as can be seen from the example, no subject is marked, but
rather an object. It is still understood that *means* are the object
of *using* in this example.

## Morphological distinctions
<!-- this section originally from TDT guidelines section 5.16 -->

Distinctions between certain dependency types, most commonly between
participial modifiers ([`acl:partmod`]()) and adjectival modifiers
([`amod`]()) as well as adverbial modifiers ([`advmod`]()) and nominal
modifiers ([`nmod`]()), are based on the corresponding morphological
distinction, which can sometimes be rather difficult. This section
describes heuristics used to make these two most common
morphology-based distinctions. Some of these heuristics resemble those
used in the Penn Treebank [?].

### Participles versus adjectives
<!-- this section originally from TDT guidelines section 5.16.1 -->

The distinction between verb participles and adjectives is difficult
in several languages, and Finnish is no exception. In UD Finnish, this
distinction affects the syntax annotation of mainly two kinds of
structures. First, it affects the choice between the dependency types
[`acl:partmod`]() (participial modifier) and [`amod`]() (adjectival
modifier).

<!-- fname:amod_or_partmod.pdf -->
~~~ sdparse
Tunnettu näyttelijä John Travolta \n Well-known actor John Travolta
amod/acl:partmod?(näyttelijä-2, Tunnettu-1)
compound:nn(Travolta-4, näyttelijä-2)
name(Travolta-4, John-3)
~~~

Second, it affects whether certain structures should be marked as
copular clauses, or alternatively, as passive clauses in the present
or past perfect form (*perfekti* and *pluskvamperfekti* in Finnish
grammar). The same structure can be considered copular if the head
word is an adjective, or a passive clause if the head word is
considered a passive participle.

<!-- fname:copula_or_passive.pdf -->
~~~ sdparse
Uiminen järvessä on kielletty . \n Swimming in_lake is/has_been forbidden .
nsubj:cop/dobj?(kielletty-4, Uiminen-1)
nmod(Uiminen-1, järvessä-2)
cop/auxpass?(kielletty-4, on-3)
punct(kielletty-4, .-5)
~~~

Some words have several possible readings, and it is fairly common
that a word can be given either a participal reading or an adjectival
one. The following heuristics are used when deciding whether a word is
an adjective or a participle.

If a word can receive comparative and superlative forms, it is likely
to be an adjective. For instance, the word *tunnettu* "well-known",
which has both and adjectival and a participal reading, inflects in
these forms: *tunnettu*, *tunnetumpi*, *tunnetuin*.

If, on the other hand, the word is modified by for instance a nominal
or adverbial modifier, it is likely to be a verb participle. For
instance, with the word *tunnettu*, the following contexts would be
possible:

#### Examples

* [fi] *laajalti tunnettu näyttelijä* "widely known actor"
* [fi] *kalliista autoistaan tunnettu näyttelijä* "actor known for his expensive cars"

Thus, it is the case that the same word can act both as an adjective
and as a verbal participle, depending on context, and the decisions
are made on a case-by-case basis. As a third heuristic used in the
decision, the annotators are asked to consider whether someone is
actively doing something in the example under consideration. If so,
then the word is likely a verbal participle, otherwise it is an
adjective. Consider the following examples:

#### Examples

* [fi] *Maijan tuleva aviomies* lit. *Maija's coming husband* "Maija's
  future husband"
* [fi] *Maijan Turusta tuleva aviomies* "Maija's husband coming from
  Turku"

In the first example, the husband is not actively doing anything, he
simply is going to be Maija's husband in the future. Thus *tuleva* in
this example would be considered an adjective. In the second example,
he is actively coming from the direction of Turku, and thus *tuleva*
here would be a verbal participle.

As a rule of thumb, if an adjectival reading is possible in a given
context, it is generally preferred. For instance, in *tunnettu
näyttelijä* "well-known actor", if it was not specified a a by whom or
for what the actor is known, it would be assumed that the adjectival
reading is intended.  Similarly, in *uiminen on kielletty* "swimming
is forbidden", if the context does not reveal that there has been
active forbidding of the swimming (the example is genuinely
ambiguous), then it is assumed that it is a property of the swimming
that it is forbidden.

### Adverbs versus nouns
<!-- this section originally from TDT guidelines section 5.16.2 -->

Due to the fact that certain Finnish adverbs have a partial case
inflection, it is sometimes difficult to decide whether a word is an
inflected form of a noun (or adjective), or rather an adverb. For
instance, the word *pääasiassa* "mainly" could be analyzed as an
adverb, or alternatively, as an inflected form of the noun *pääasia*
"the main thing".

This distinction affects the choice between the dependency types
[`advmod`]() (adverb modifier) and [`nmod`]() (nominal modifier).
Additionally, it can affect the choice of whether a word can be marked
as a predicative (if it is an adverb) and thus head of the clause, or
if it should me marked as a nominal modifier for the verb olla. In the
latter case, the structure of the whole clause is affected by the
decision.

<!-- fname:advmod_or_nommod.pdf -->
~~~ sdparse
Pääasiassa tämä vaikuttaa koron suuruuteen . \n Mainly this affects interest's level .
advmod/nmod?(vaikuttaa-3, Pääasiassa-1)
nsubj(vaikuttaa-3, tämä-2)
nmod(vaikuttaa-3, suuruuteen-5)
nmod:poss(suuruuteen-5, koron-4)
punct(vaikuttaa-3, .-6)
~~~

<!-- fname:predicative_or_nommod1.pdf -->
~~~ sdparse
Elisa ja Elias ovat naimisissa . \n Elisa and Elias are married .
cc(Elisa-1, ja-2)
conj(Elisa-1, Elias-3)
nsubj:cop?(naimisissa-5, Elisa-1)
cop?(naimisissa-5, ovat-4)
punct(naimisissa-5, .-6)
~~~

<!-- fname:predicative_or_nommod2.pdf -->
~~~ sdparse
Matti oli humalassa . \n Matti was drunk .
nsubj?(oli-2, Matti-1)
nmod?(oli-2, humalassa-3)
punct(oli-2, .-4)
~~~

Again, the main source of information while annotating is the
morphological analysis of the word, but occasionally it is possible
that the syntactic annotation uses a reading that has been omitted.
It is less common that both an adverb and noun reading would be
available. Decision heuristics are needed here as well.

The main deciding factor between a noun and an adverb reading is
whether there exists a corresponding noun in its baseform and whether
and to what degree the word under question is related to that
noun. For example, in the case of *pääasiassa* "mainly" there exists a
corresponding noun *pääasia* "main thing", but in the case of
*naimisissa* "married" the only candidate for such a noun would be
*naiminen*, which could technically be translated as "marrying", but
is in fact more often used (usually in spoken language) in the meaning
"having sex". As for *humalassa* "drunk", there is a candidate noun,
*humala*, which can be used to refer to the state of being drunk.

As a test used to see whether the possible candidate noun is closely
(enough) related to the word under question, annotators are asked to
reflect on the hypothetical baseform of the noun reading and on
whether it could be imagined to be involved in the current
sentence. For instance, is there a main thing (*pääasia*) in which the
interest rate is affected? Is there a state of being married
("*naimiset*") in which Elisa and Elias are? Is there a state of being
drunk (*humala*) in which Matti is? The answer to the first two
questions is no, and thus *pääasiassa* and *naimisissa* are considered
adverbs. The answer to the third question, however, is yes, and
therefore the word *humalassa* is analyzed as an inflected form of the
noun *humala*.

## Attaching punctuation
<!-- this section originally from TDT guidelines section 5.17 -->

Dependencies signaling punctuation are labeled with the dependency
type [`punct`](), and the main rule is that the dependency should be
attached to that element which it delimits. Thus, sentence-delimiting
punctuation, such as ".", "!" or "?" should be attached to the main
verb (or predicative) of the sentence.

<!-- fname:sentpunct.pdf -->
~~~ sdparse
Söin jäätelöä . \n I_ate ice-cream .
dobj(Söin-1, jäätelöä-2)
punct(Söin-1, .-3)
~~~

According to the same rule, the comma delimiting a subordinate clause
should be attached to the head word of said clause.

<!-- fname:subordpunct1.pdf -->
~~~ sdparse
Jos sataa , menen sisälle . \n If it_rains , I_go inside .
mark(sataa-2, Jos-1)
punct(sataa-2, ,-3)
advcl(menen-4, sataa-2)
advmod(menen-4, sisälle-5)
punct(menen-4, .-6)
~~~

If there are several subordinate clauses within each other and the
punctuation could delimit any of them, the shortest-spanning (closest)
clause is selected.

<!-- fname:subordpunct2.pdf -->
~~~ sdparse
Jos syöt sieniä , jotka ovat myrkyllisiä , kuolet . \n If you_eat mushrooms , that are poisonous , you_die .
mark(syöt-2, Jos-1)
dobj(syöt-2, sieniä-3)
acl:relcl(sieniä-3, myrkyllisiä-7)
punct(myrkyllisiä-7, ,-4)
cop(myrkyllisiä-7, ovat-6)
punct(myrkyllisiä-7, ,-8)
advcl(kuolet-9, syöt-2)
punct(kuolet-9, .-10)
~~~

In coordinations, the punctuation symbols (usually commas) are treated
similarly to the coordinating conjunction and attached to the head of
the coordination, which is the first coordinated element.

<!-- fname:coordpunct.pdf -->
~~~ sdparse
kivet , kannot ja männynkävyt \n rocks , stumps and pinecones
punct(kivet-1, ,-2)
conj(kivet-1, kannot-3)
cc(kivet-1, ja-4)
conj(kivet-1, männynkävyt-5)
~~~

Punctuation related to coordination-like parataxis, that is, parataxis
used in connection with a semicolon, colon or dash, is attached as in
coordinations.

<!-- fname:parataxispunct1.pdf -->
~~~ sdparse
Matti tuli töistä ; Maija oli jo kotona . \n Matti came from_work ; Maija was already home .
nsubj(tuli-2, Matti-1)
nmod(tuli-2, töistä-3)
punct(tuli-2, ;-4)
parataxis(tuli-2, oli-6)
nsubj(oli-6, Maija-5)
advmod(oli-6, jo-7)
advmod(oli-6, kotona-8)
punct(tuli-2, .-9)
~~~

Punctuation with direct speech -type parataxis, however, is seen to
delimit the utterance of the speaker.

<!-- fname:parataxispunct2.pdf -->
~~~ sdparse
" Älä sotke itseäsi " , äiti sanoi . \n " Don't mess yourself " , mother said .
neg(sotke-3, Älä-2)
dobj(sotke-3, itseäsi-4)
punct(sotke-3, "-1)
punct(sotke-3, "-5)
punct(sotke-3, ,-6)
parataxis(sanoi-8, sotke-3)
nsubj(sanoi-8, äiti-7)
punct(sanoi-8, .-9)
~~~

Single and double quotes as well as parentheses are attached to the
head of the quoted/parenthetical clause or phrase. Dashes signifying
quotes are also attached to the head of the quote.

<!-- fname:quotes.pdf -->
~~~ sdparse
Illan elokuva on " Kuninkaan puhe " . \n Tonigt's movie is " The_King's speech " .
nmod:poss(elokuva-2, Illan-1)
nsubj:cop(puhe-6, elokuva-2)
cop(puhe-6, on-3)
punct(puhe-6, "-4)
nmod:poss(puhe-6, Kuninkaan-5)
name(puhe-6, Kuninkaan-5)
punct(puhe-6, "-7)
punct(puhe-6, .-8)
~~~

<!-- fname:parentheses.pdf -->
~~~ sdparse
Matikainen ( s. 1943 ) on ammatiltaan kirjailija . \n Matikainen ( born 1943 ) is by_profession author .
nsubj:cop(kirjailija-8, Matikainen-1)
acl:partmod(Matikainen-1, s.-3)
punct(s.-3, (-2)
nmod(s.-3, 1943-4)
punct(s.-3, )-5)
cop(kirjailija-8, on-6)
nmod(kirjailija-8, ammatiltaan-7)
punct(kirjailija-8, .-9)
~~~

<!-- fname:quotedash.pdf -->
~~~ sdparse
- Älä sotke itseäsi , sanoi äiti . \n - Don't mess yourself , said mother .
punct(sotke-3, --1)
neg(sotke-3, Älä-2)
dobj(sotke-3, itseäsi-4)
punct(sotke-3, ,-5)
parataxis(sanoi-6, sotke-3)
nsubj(sanoi-6, äiti-7)
punct(sanoi-6, .-8)
~~~

If the quotes or parentheses contain two or more items, such as parts
of a coordination, then the punctuation is attached to the closest
enclosed element, so as to avoid unnecessary non-projectivity.

<!-- fname:quotecoord.pdf -->
~~~ sdparse
Hän pitää kirjoista ( ja näytelmistä ) . \n He likes books ( and plays ) .
nsubj(pitää-2, Hän-1)
dobj(pitää-2, kirjoista-3)
cc(kirjoista-3, ja-5)
conj(kirjoista-3, näytelmistä-6)
punct(pitää-2, .-8)
punct(ja-5, (-4)
punct(näytelmistä-6, )-7)
~~~

Punctuation can also delimit short additions, such as nominal
modifiers or appositions, and in such cases, the punctuation should be
attached to the head of the addition.

<!-- fname:punctappos.pdf -->
~~~ sdparse
Matti Tamminen , professori \n Matti Tamminen , the_professor
name(Tamminen-2, Matti-1)
appos(Tamminen-2, professori-4)
punct(professori-4, ,-3)
~~~

<!-- fname:punctnommod.pdf -->
~~~ sdparse
Lähden matkalle , ainakin viikoksi . \n I_am_going to_trip , at_least for_a_week .
nmod(Lähden-1, matkalle-2)
nmod(Lähden-1, viikoksi-5)
punct(Lähden-1, .-6)
punct(viikoksi-5, ,-3)
advmod(viikoksi-5, ainakin-4)
~~~

Finally, list item markers such as bullets of a bulleted list are
marked as punctuation attached to the head of the list item.

<!-- fname:bullet.pdf -->
~~~ sdparse
* Käy kaupassa . \n * Visit store .
punct(Käy-2, *-1)
punct(Käy-2, .-4)
nmod(Käy-2, kaupassa-3)
~~~


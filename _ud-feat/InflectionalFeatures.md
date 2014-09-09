---
layout: base
title: 'Inflectional Features'
shortdef: 'this page will be split to individual features'
---

## {{ page.title }}: {{ page.shortdef }}

# Universal Dependencies: Features of Tokens<br />Part 2: Inflectional Features

## Number

Number is usually inflectional feature
of nouns and, depending on language, other parts of speech
(adjectives, verbs) that mark agreement with nouns.

### Sing: singular number

A singular noun denotes one person, animal or thing. Example: [en]
<I>car</I>

## Plur: plural number

A plural noun denotes several persons, animals or things. Example:
[en] <I>cars</I>

## Dual: dual number

A dual noun denotes two persons, animals or things.

Example: [sl] singular <I>glas</I>
(voice),
dual
<I>glasova</I>
(voices),
plural
<I>glasovi</I>
(voices);
[ar]
singular
سَنَةٌ
<I>sanatun</I>
(year), dual سَنَتَانِ
<I>sanatāni</I>
(years), plural سِنُونَ
<I>sinūna</I>
(years).

## Ptan: plurale tantum

Some nouns
appear only in the plural form even though they denote one thing
(semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so &ldquo;Plur&rdquo; is
obviously the back-off value here; however, if the language also
marks gender, the non-existence of singular form sometimes means that
the gender is unknown. In
Czech, special type of numerals is used when counting nouns that are
plurale tantum (NumType
= Sets).

Example: [en]
<I>scissors, pants;</I>
[cs] <I>nůžky, kalhoty</I>

## Coll: collective / mass / singulare tantum

Collective or
mass or singulare tantum is a special case of singular. It
applies to words that use grammatical singular to describe sets of
objects, i.e. semantic plural. Although in theory they might be able
to form plural, in practice it would be rarely semantically
plausible. Sometimes, the plural form exists and means &ldquo;several
sorts of&rdquo; or
&ldquo;several packages of&rdquo;.

Although mass nouns exist in various
languages (because of their semantic nature), they are rarely marked
in tagsets. I found the value in one tagset of Czech and in Italian
(CoNLL data).

Example: [cs]
<I>lidstvo</I>
(mankind)

## Case

Case is usually inflectional feature of
nouns and, depending on language, other parts of speech (adjectives,
numerals) that mark agreement with nouns. In some tagsets it is also
valency feature of adpositions (saying that the adposition requires
its argument to be in that case).

Case helps specify the role of the noun
phrase in the sentence, especially in free-word-order languages. For
example, the nominative and accusative cases often distinguish
subject and object of the verb, while in fixed-word-order languages
these functions would be distinguished merely by the positions of the
nouns in the sentence.

Here on the level of morphosyntactic
features we are dealing with case expressed morphologically, i.e. by
bound morphemes (affixes). Note that on a higher level case can be
understood more broadly as <I>the role,</I> and it can be also
expressed by adding an adposition to the noun. What is expressed by
affixes in one language can be expressed using adpositions in another
language. Cf. the &ldquo;case&rdquo; dependency label.

Examples: [cs] nominative <I>matka</I>
(mother), genitive <I>matky</I>,
dative <I>matce</I>, accusative <I>matku</I>,
vocative <I>matko</I>, locative <I>matce</I>,
instrumental <I>matkou</I>;
[de] nominative <I>der Mann</I> (the man), genitive <I>des
Mannes</I>, dative <I>dem Mann</I>, accusative <I>den Mann</I>;
[en] nominative/direct case <I>he, she</I>, accusative/oblique
case <I>him, her</I>

The descriptions of the individual case
values below include semantic hints about the prototypical meaning of
the case. Bear in mind that quite often a case will be used for a
meaning that is totally unrelated to the meaning mentioned here.
Valency of verbs, adpositions and other words will determine that the
noun phrase must be in a particular grammatical case to fill a
particular valency slot (semantic role). It is much the same as
trying to explain the meaning of prepositions: most people would
agree that the central meaning of English <I>in</I> is location in
space or time but there are phrases where the meaning is less
locational: <I>In God we trust. </I><I>Say it in English.</I>

Note
that Indian corpora based on the so-called Paninian model use a
related feature called <I>vibhakti</I>.
It is a merger of the Case feature described here and of various
postpositions. Values of the feature are language-dependent because
they are copies of the relevant morphemes (either bound morphemes or
postpositions). Vibhakti
can be mapped on the Case values described here if we know 1. which
source values are bound morphemes (postpositions are separate nodes
for us) and 2. what is their meaning. For instance, the genitive case
(Gen) in Bengali is marked using the suffix <I>-ra</I>
(-র),
i.e. vib=era.
In Hindi, the suffix has been split off the noun and
it is now written as a separate word &ndash; the postposition
<I>kā/kī/ke</I>
(का/की/के).
Even
if the
postpositional phrase
can be understood as a genitive noun phrase, the noun is not in
genitive. Instead, the postposition requires that it takes one of
three case forms that are marked directly on the noun: the oblique
case (Acc).

### Nom: nominative / direct

The base form
of the noun, typically
used as citation form (lemma).
In many languages this is the word form used for subjects of clauses.
If
the language has only two cases, which are called &ldquo;direct&rdquo;
and &ldquo;oblique&rdquo;, the direct case will be marked Nom.

### Acc: accusative / oblique

Perhaps the
second most widely spread morphological case.
In many languages this is the word form used for direct
objects
of
verbs.
If the language has only two cases, which are called &ldquo;direct&rdquo;
and &ldquo;oblique&rdquo;, the oblique
case will be marked Acc.

### Abs: absolutive

Some
languages (e.g.
Basque)
do not use nominative-accusative to distinguish subjects and objects.
Instead, they use the contrast of absolutive-ergative.

The absolutive case marks subject of
intransitive verb and direct object of transitive verb.

### Erg: ergative

Some
languages (e.g.
Basque)
do not use nominative-accusative to distinguish subjects and objects.
Instead, they use the contrast of absolutive-ergative.

The ergative case marks subject of
transitive verb.

### Dat: dative

In many
languages this is the word form used for indirect
objects
of
verbs.
Example:
[de] <I>Ich gebe </I><span style='color: red'><I>meinem
Bruder</I></span><I> ein Geschenk.</I>
(I
give my brother a present.) &ldquo;meinem Bruder&rdquo; (my brother)
is dative and &ldquo;ein Geschenk&rdquo; (a present) is accusative.

### Gen: genitive

Prototypical
meaning of genitive is that the noun phrase somehow belongs to its
governor; it would often be translated by the English preposition <I>of</I>.
English has the &ldquo;saxon genitive&rdquo; formed by the suffix <I>'s</I>;
but we will normally not need the feature in English because the
suffix gets separated from the noun during tokenization.

Note that
despite considerable semantic overlap, the genitive case is not the
same as the feature of possessivity (Poss). Possessivity is a lexical
feature, i.e. it applies to lemma and its whole paradigm. Genitive is
a feature of just a subset of word forms of the lemma. Semantics
of possessivity is much more clearly defined while the genitive (as
many
other
cases) may be required in situations that have nothing to do with
possessing. For example, [cs] <I>bez
prezidentovy dcery</I>
(without
the president's daughter) is a prepositional phrase containing the
preposition <I>bez</I>
(without),
the possessive adjective <I>prezidentovy</I>
(president's)
and th noun <I>dcery</I>
(daughter).
The possessive adjective is derived from the noun <I>prezident</I>
but
it is really an adjective (with separate lemma and paradigm), not
just a form of the noun. In addition, both the adjective and the noun
are in their genitive forms (the nominative would be <I>prezidentova
dcera</I>).
There is nothing possessive about this particular occurrence of the
genitive. It is there because the preposition <I>bez</I>
always
requires its argument to be in genitive.

Example: [cs] <I>Praha
je hlavní město </I><span style='color: red'><I>České
republiky</I></span><I>.</I>
(Prague is the capital <span style='color: red'>of the Czech
Republic</span>.)

Note that in
Basque, Gen should be used for possessive
genitive (as opposed to locative genitive): <span style='color: red'><I>diktadorearen</I></span><I>
erregimena</I> (dictator's regime;
<I>diktadore</I> = dictator).

### Voc: vocative

The vocative
case is a special form of noun used
to address someone. Thus it predominantly appears with animate nouns
(see the feature of animateness). Nevertheless this is not a
grammatical restriction and inanimate
things can be addressed as well.

Example: [cs]
<I>Co myslíš, </I><span style='color: red'><I>Filip</I></span><span style='color: red'><I>e</I></span><I>?</I>
(What
do you think, <span style='color: red'>Filip</span>?)

### Loc: locative

The locative
case often expresses location in space or time, which gave it its
name. As elsewhere, non-locational meanings also exist
and they are not rare. Uralic languages have a complex set of
fine-grained locational and directional cases (see below) instead of
the locative. Even in languages that have locative, some location
roles may be expressed using other cases (e.g. because those cases
are required by a preposition).

In Slavic
languages this is the only case that is used exclusively in
combination with prepositions (but such a
restriction may not hold in other languages that have locative).

Example: [cs]
<I>V </I><span style='color: red'><I>červenci</I></span><I>
jsem byl ve </I><span style='color: red'><I>Švédsku</I></span><I>.</I>
(In
<span style='color: red'>July</span>
I was in <span style='color: red'>Sweden</span>.)

Non-locational
non-temporal example: [cs] <I>Mluvili
jsme tam o </I><span style='color: red'><I>morfologii</I></span><I>.</I>
(We
talked there
about <span style='color: red'>morphology</span>.)

### Ins: instrumental / instructive

The role from
which the name of the instrumental case is derived is that the noun
is used as instrument to do something (as in [cs] <I>psát
</I><span style='color: red'><I>perem</I></span>
(to
write <span style='color: red'>using
a pen</span>)).
Many other meanings are possible, e.g. in Czech the instrumental is
required by the preposition <I>s</I>
(with)
and thus it includes the meaning expressed in other languages by the
comitative case.

In Czech the
instrumental is also used for the agent-object in passive
constructions (cf. the English preposition <I>by</I>).

Passive
example: [cs] <I>Tento zákon byl
schválen </I><span style='color: red'><I>vládou</I></span><I>.</I>
(This
bill has been approved <span style='color: red'>by
the government</span>.)

A semantically
similar case called instructive is used
rarely in Finnish to express &ldquo;with (the aid of)&rdquo;. It
can be applied to infinitives that behave much like nouns in Finnish.
We currently propose one label for both instrumental and instructive
(instrumental is not defined in Finnish).

Examples: [fi]
<I>lähteä</I>
=
to leave; <I>2003 </I><span style='color: red'><I>lähtien</I></span>
(second
infinitive in the instructive case: since 2003); <I>yllättää</I>
=
to surprise; <I>sekaantui </I><span style='color: red'><I>yllättäen</I></span><I>
valtataisteluun</I>
(lit.
was-involved-in by-surprise.Ins
power-struggle.Ill).

### Par: partitive

In Finnish the partitive case expresses
unknown identity and unfinished actions without result.

Examples: [fi]
<I>kolme </I><span style='color: red'><I>taloa</I></span>
(three
<span style='color: red'>houses</span>;
the <I>-a</I>
suffix of <I>talo</I>);
<I>rakastan tätä </I><span style='color: red'><I>taloa</I></span>
(I
like this <span style='color: red'>house</span>);
<I>saanko lainata </I><span style='color: red'><I>kirjaa</I></span><I>?</I>
(can
I borrow the <span style='color: red'>book</span>?;
the <I>-a</I>
suffix of <I>kirja</I>);
<I>lasissa on </I><span style='color: red'><I>maitoa</I></span>
(there
is (some) <span style='color: red'>milk</span>
in the glass).

Examples
comparing partitive with accusative: <I>ammuin
karhun</I>
(I shot a bear.Acc (and I know that it is dead)); <I>ammuin
karhua</I>
(I shot at a bear.Par (but I may have missed)).

Using
accusative instead of partitive may also substitute the missing
future tense: <I>luen kirjan</I>
(I will read the book.Acc); <I>luen
kirjaa</I>
(I am reading the book.Par).

### Dis: distributive

The distributive case conveys that
something happened to every member of a set, one in a time. Or it may
express frequency.

Examples: [hu]
<I>fejenként</I>
(per
capita); <I>esetenként</I>
(in
some cases); <I>hetenként</I>
(once
per week, weekly); <I>tízpercenként</I>
(every
ten minutes).

### Ess: essive / prolative

The essive case expresses a temporary
state, often it corresponds to English &ldquo;as a &hellip;&rdquo; A
similar case in Basque is called prolative and I suggest to tag it
&ldquo;Ess&rdquo; too.

Examples: [fi]
<I>lapsi</I>
= child; <span style='color: red'><I>lapsena</I></span>
= as a child / when he was child; [et]
<I>laps</I>
= child; <I>lapsena</I>
= as a child; [eu] <I>erreformista</I>
= reformer; <span style='color: red'><I>erreformistatzat</I></span>
= as a reformer.

### Tra: translative / factive

The translative case expresses a change
of state (&ldquo;it becomes X&rdquo;, &ldquo;it changes to X&rdquo;).
Also used for the phrase &ldquo;in language X&rdquo;. In the Szeged
Treebank [hu], this case is called factive.

Examples: [fi]
<I>pitkä</I>
=
long; <I>venyi </I><span style='color: red'><I>pitkäksi</I></span>
=
he got longer; <I>englanti</I>
= English language; <span style='color: red'><I>englanniksi</I></span>
= in English; <I>kello kuusi</I>
= six o'clock; <I>kello </I><span style='color: red'><I>kuudeksi</I></span>
= until six o'clock; [et] <I>kell
kuus</I> =
six o'clock; <I>kella </I><span style='color: red'><I>kuueks</I></span>
= until six o'clock; [hu] <I>Oroszlány
halott </I><span style='color: red'><I>várossá</I></span><I>
válhat.</I>
= lit. Oroszlány dead city.Tra
could-become. = Oroszlány could become a dead city.

### Com: comitative / associative

The comitative (also called
associative) case corresponds to English &ldquo;together with &hellip;&rdquo;

Examples: [et]
<I>koer</I>
=
dog;
<span style='color: red'><I>koeraga</I></span>
=
with
dog.

### Abe: abessive

The abessive
case corresponds to the
English preposition <I>without</I>.

Examples: [fi]
<I>raha</I>
=
money;
<span style='color: red'><I>rahatta</I></span>
=
without
money.

### Ine: inessive

The inessive
case expresses location inside of something.

Examples: [hu]
<I>ház</I>
=
house;
<span style='color: red'><I>házban</I></span>
=
in
the house; [fi] <I>talo</I>
= house; <span style='color: red'><I>talossa</I></span>
= in the house; [et] <I>maja</I>
= house; <span style='color: red'><I>majas</I></span>
= in the house.

### Ill: illative

The illative
case expresses direction
into
something.

Examples: [hu]
<I>ház</I>
=
house;
<span style='color: red'><I>házb</I></span><span style='color: red'><I>a</I></span>
=
to
the house; [fi] <I>talo</I>
= house; <span style='color: red'><I>talo</I></span><span style='color: red'><I>on</I></span>
= to
the house; [et] <I>maja</I>
= house; <span style='color: red'><I>majas</I></span><span style='color: red'><I>se
/ majja</I></span>
= to
the house.

### Ela: elative

The elative
case expresses direction
out
of something.

Examples: [hu]
<I>ház</I>
=
house;
<span style='color: red'><I>házból</I></span>
=
from
the house; [fi] <I>talo</I>
= house; <span style='color: red'><I>talos</I></span><span style='color: red'><I>t</I></span><span style='color: red'><I>a</I></span>
= from
the house; [et] <I>maja</I>
= house; <span style='color: red'><I>majas</I></span><span style='color: red'><I>t</I></span>
= from
the house.

### Add: additive

Distinguished by some scholars in
Estonian, not recognized by traditional grammar, exists in the
Multext-East Estonian tagset and in the Eesti keele puudepank.
Reportedly same or similar meaning as illative. Forms of this case
exist only in singular and not for all nouns.

### Ade: adessive

The adessive
case expresses location at
or by
something (not
inside and not on the surface of it).
The
corresponding directional cases are allative (towards something) and
ablative (from something).

Examples: [hu]
<I>pénztár</I>
=
cash
desk;
<span style='color: red'><I>pénztárnál</I></span>
=
at
the cash desk;
[fi] <I>pöytä</I>
= table;
<span style='color: red'><I>pöydällä</I></span>
= at
the table;
[et] <I>laud</I>
= table;
<span style='color: red'><I>laual</I></span>
= at
the table.

### All: allative

The allative
case expresses direction
to
something (destination
is adessive, i.e. at or by that something, not on or inside of it).

Examples: [hu]
<I>pénztár</I>
=
cash
desk;
<span style='color: red'><I>pénztár</I></span><span style='color: red'><I>hoz</I></span>
=
to
the cash desk;
[fi]
<I>pöytä</I>
= table;
<span style='color: red'><I>pöydäll</I></span><span style='color: red'><I>e</I></span>
= to
the table.

### Abl: ablative

Prototypical meaning: direction from
some point.

Examples: [hu]
a <span style='color: red'><I>barátomtól</I></span>
jövök (I'm
coming <span style='color: red'>from
my friend</span>);
[fi]
<I>pöydältä</I>
(from
the table);
<I>katolta</I>
(from
the roof);
<I>rannalta</I>
(from
the beach)

### Sup: superessive

Used,
chiefly <A HREF="http://www.hungarianreference.com/Nouns/-n-superessive.aspx">in
Hungarian</A>, to
indicate location on top of something or on the surface of something.

Examples: [hu]
<I>asztal</I>
=
table;
<span style='color: red'><I>asztalon</I></span>
=
on
the table;
<I>könyvek</I>
=
books; <span style='color: red'><I>könyveken</I></span>
=
on books.

### Sub: sublative

The sublative
case is
used in Finno-Ugric languages to express the destination of movement,
originally to the surface of something (e.g. &ldquo;to climb a
tree&rdquo;), and, by extension, in other figurative meanings as well
(e.g. &ldquo;to university&rdquo;).

Examples: [hu]
<I>Belgrádtól 150 </I><span style='color: red'><I>kilométerre
délnyugatra</I></span>
= lit.
Belgrade.Abl
150 kilometer.Sub southwest.Sub = 150 kilometers southwest of
Belgrade; <I>hajó</I>
=
ship; <span style='color: red'><I>hajóra</I></span>
=
onto the ship; <span style='color: red'><I>bokorra</I></span>
=
on the shrub.

### Del: delative

Used,
chiefly <A HREF="http://www.hungarianreference.com/Nouns/ról-rol-delative.aspx">in
Hungarian</A>,
to express the movement from the surface of something (like &ldquo;moved
off the table&rdquo;). Other
meanings are possible as well, e.g. &ldquo;about something&rdquo;.

Examples: [hu]
<I>asztal</I>
=
table;
<I>az </I><span style='color: red'><I>asztal</I></span><span style='color: red'><I>ról</I></span>
=
off
the table;
<span style='color: red'><I>Budapestről</I></span><I>
vagyok</I>
= I
am/come from Budapest.

### Lat: lative / directional allative

<SPAN STYLE="background: #ffff00">The
lative case denotes
movement towards/to/into/onto something. Similar case in Basque is
called directional allative (Spanish <EM>adlativo
direccional</EM>).
However, lative is typically thought of as a union of allative,
illative and sublative, while in Basque it is derived from allative,
which also exists independently.</SPAN>

<SPAN STYLE="background: #ffff00">Examples:
[eu] <I>behe</I>
= low; <span style='color: red'><I>beherantz</I></span>
= down.</SPAN>

### Tem: temporal

<SPAN STYLE="background: #ffff00">The
temporal
case is used to indicate
time.</SPAN>

<SPAN STYLE="background: #ffff00">Examples:
[hu]
<I>hétkor</I>
= at seven (o'clock);
<I>éjfélkor</I>
= at midnight;
<I>karácsonykor</I>
= at Christmas.</SPAN>

### Ter: terminative / terminal allative

The
terminative
case specifies where something ends in space or time. Similar
case in Basque is called terminal allative (Spanish <EM>adlativo
terminal</EM>). 


<SPAN STYLE="background: #ffff00">Examples:
[et]
<span style='color: red'><I>j&otilde;eni</I></span>
= down to the river; <I>kella
</I><span style='color: red'><I>kuueni</I></span>
= till six o'clock; [hu] <I>a
</I><span style='color: red'><I>házig</I></span>
= up to the house; <I>hat
</I><span style='color: red'><I>óráig</I></span>
= till six o'clock; [eu] <I>erdi</I>
= half; <span style='color: red'><I>erdiraino</I></span>
= up to the half.</SPAN>

### Cau: causative / motivative

<SPAN STYLE="background: #ffff00">Noun
in this case is the cause of something. In
Hungarian it also seems to be used frequently with currency (&ldquo;to
buy something <I>for</I>
the money?&rdquo;)</SPAN>

Examples:
[hu]
<I>Egy
világcég benzinkútjánál 7183 </I><span style='color: red'><I>forintért</I></span><I>
tankoltam.</I> [eu]
<I>jokaera</I>
= behavior; <span style='color: red'><I>jokaeragatik</I></span>
= because of behavior.

### Ben: benefactive / destinative

<SPAN STYLE="background: #ffff00">The
benefactive case corresponds to the English preposition <I>for</I>.</SPAN>

Examples:
[eu]
<I>mutil</I>
= boy;
<span style='color: red'><I>mutilarentzat</I></span>
= for boys.

## PrepCase

Personal pronouns in some languages
have different forms depending on whether they are objects of
prepositions or not. For instance, Czech <I>on</I>
(he) without prepositions has the forms <I>jemu</I>/DAT, <I>jeho</I>/ACC,
<I>jím</I>/INS, while with a preposition it is <I>němu</I>/DAT,
<I>něho</I>/ACC, <I>ním</I>/INS. Similarly, Portuguese pronouns in
prepositional oblique case take forms different from oblique pronouns
serving as direct objects of verbs: <I>eu</I>/NOM (I), <I>me</I>/ACC
(give me that), <I>mim</I>/PREP-ACC (come to me).

Default empty value means that the word form is neutral w.r.t.
prepositions.

### Npr: non-prepositional case

This
word form must not be used after a preposition.

Examples:
[cs]
<span style='color: red'><I>jemu</I></span>
= him (dative).

### Pre: prepositional case

This
word form must be used after a preposition.

Examples:
[cs]
<I>k
</I><span style='color: red'><I>ně</I></span><span style='color: red'><I>mu</I></span>
= to
him (dative).

## Definiteness

Definiteness is
typically a feature of nouns, adjectives and articles. Its value
distinguishes whether we are talking about something known and
concrete, or something general or unknown. It can be marked on
definite and indefinite articles, or directly on nouns, adjectives
etc. In Arabic, definiteness is also called
the &ldquo;state&rdquo;.

### Ind: indefinite

Examples: [en]
<span style='color: red'><I>a</I></span><I>
dog</I>

### Def: definite

Examples: [en]
<span style='color: red'><I>the</I></span><I>
dog</I>

### Red: reduced

Used
in <A HREF="http://en.wikipedia.org/wiki/Status_constructus">construct
state</A> in
Arabic. If two nouns are in genitive relation, the first one (the
&ldquo;nomen regens&rdquo;) has &ldquo;reduced definiteness,&rdquo;
the second is the genitive and can be either definite or indefinite.
Reduced form has neither the definite morpheme (article), nor the
indefinite morpheme (nunation).

Examples:
[ar]
indefinite state: حلوَةٌ
<EM>ḥulwatun</EM>
&ldquo;a sweet&rdquo;; definite state: الحلوَةُ
<EM>al-ḥulwatu</EM>
&ldquo;the sweet&rdquo;; <span style='color: red'>حلوَةُ
</span><EM><span style='color: red'>ḥulwatu</span></EM>
&ldquo;sweet of&rdquo;.

### Com: complex

Used in
<A HREF="http://books.google.cz/books?id=rs3hzfgj3hoC&amp;pg=PA131&amp;lpg=PA131&amp;dq=arabic+improper+annexation&amp;source=bl&amp;ots=d6gGCpprOX&amp;sig=3G6YkRZsIy_EL0OCEh7_V7qqnlE&amp;hl=cs&amp;ei=ZasDTuLhGc_vsgaLlcyeDg&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=2&amp;ved=0CB4Q6AEwAQ#v=onepage&amp;q=arabic%20improper%20annexation&amp;f=false">improper
annexation</A> in
Arabic. The genitive construction described above normally consists
of two nouns (first reduced, second genitive). That is called proper
annexation or iḍāfa. If the first member is an adjective
or adjectivally used participle and the second member is a definite
noun, the construction is called improper annexation or false iḍāfa.
The result is a compound adjective that is usually used as an
attributive adjunct and thus must agree in definiteness with the noun
it modifies. Its first part (the adjective or participle) may get
again the definite article. Although it may look the same as the form
for the definite state, it is assigned a special value of <EM>complex</EM>
state to reflect the different origin. See also <A HREF="http://ufal.mff.cuni.cz/padt/PADT_1.0/docs/papers/2004-nemlar-padt.pdf">Hajič
et al.</A> page
3.

Examples:
[ar] مُخْتَلِفٌ
<EM>muxtalifun</EM>
&ldquo;different/various&rdquo; (active participle, Form VIII);
نَوْعٌ
ج أنْوَاعٌ
<EM>nawˀun
ja anwāˀun</EM>
&ldquo;kind&rdquo;; مُخْتَلِفُ
الأنْوَاعِ
<EM>muxtalifu
al-anwāˀi</EM>
&ldquo;of various kinds&rdquo; (false iḍāfa); مَشَاكِلُ
مُخْتَلِفَةُ
الأنْوَاعِ
<EM>mašākilu
muxtalifatu al-anwāˀi</EM>
&ldquo;problems of various kinds&rdquo;; اَلْمَشَاكِلُ
<span style='color: red'>الْمُخْتَلِفَةُ</span>
الأنْوَاعِ
<EM>al-mašākilu
</EM><EM><span style='color: red'>al-muxtalifatu</span></EM><EM>
al-anwāˀi</EM>
&ldquo;the problems of various kinds&rdquo;.

## Negativeness

Negativeness is
typically a feature of verbs, adjectives, sometimes also adverbs and
nouns in languages that negate using bound morphemes. For instance,
all Czech verbs and adjectives can be negated using the prefix <I>ne-</I>.
In
English, verbs are negated using the particle (adverb?) <I>not</I>
and adjectives are also negated using prefixes, although the process
is less productive than in Czech <I>(wise
&ndash; unwise, probable &ndash; improbable)</I>.

Note that Negativeness=Neg is not the
same thing as PronType=Neg. For pronouns and other pronominal parts
of speech there is no such binary opposition as for verbs and
adjectives. (There is no such thing as &ldquo;affirmative pronoun&rdquo;.)

The
negativeness feature could be also used to distinguish response
particles <I>yes</I>
and <I>no</I>.

### Pos: positive, affirmative

Examples:
[cs] <span style='color: red'><I>přišel</I></span>
(he
came)

### Neg: negative

Examples: [cs]
<span style='color: red'><I>nepřišel</I></span>
(he
did
not come)

## Degree

Degree
of comparison is typically an inflectional feature of some adjectives
and adverbs.

### Pos: positive, first degree

This
is the base form that merely states a quality of something, without
comparing it to qualities of others. Note that although this degree
is traditionally called &ldquo;positive&rdquo;, negative properties
can be compared, too.

Examples:
[en] <span style='color: red'><I>young</I></span><I>
man</I>,
[cs]
<span style='color: red'><I>mladý</I></span><I>
muž</I>

### Cmp: comparative, second degree

The
quality of one object is compared to the same quality of another
object.

Examples:
[en] <I>the
man is </I><span style='color: red'><I>younger</I></span><I>
than me</I>,
[cs]
<I>ten
muž je </I><span style='color: red'><I>mladší</I></span><I>
než já</I>

### Sup: superlative, third degree

The
quality of one object is compared to the same quality of all other
objects within a set.

Examples:
[en] <I>this
is the </I><span style='color: red'><I>youngest</I></span><I>
man in our team</I>,
[cs]
<I>toto
je </I><span style='color: red'><I>nejmladší</I></span><I>
muž v našem týmu</I>

### Abs: absolute superlative

Some
languages can express morphologically that the studied quality of the
given object is so strong that there is hardly any other object
exceeding it. The quality is not actually compared to any particular
set of objects.

Examples:
[es]
<I>guapo</I>
= handsome,
<span style='color: red'><I>guapísimo</I></span>
=
indescribably handsome

## Person

Person
is typically feature of personal and possessive pronouns, and of
verbs. On verbs it is in fact an agreement feature that marks the
person of the verb's subject (some languages, e.g. Basque, can also
mark person of objects). Person marked on verbs makes it unnecessary
to always add a personal pronoun as subject and thus subjects are
sometimes dropped (pro-drop languages).

The
&ldquo;Person&rdquo; feature may interact with the feature of
politeness, see there.

### 1: first person

In
singular, the first person refers just to the speaker / author. In
plural, it must include the speaker and one or more additional
persons. Some languages (e.g. Taiwanese) distinguish inclusive and
exclusive 1<SUP>st</SUP> person plural pronouns: the former include
the addressee of the utterance (i.e. <I>I + you</I>), the latter
exclude them (i.e. <I>I + they</I>).

Examples:
[en]
<span style='color: red'><I>I</I></span><I>,
</I><span style='color: red'><I>we</I></span>;
[cs] <span style='color: red'><I>dělám</I></span>
(<span style='color: red'>I</span>
do)

### 2: second person

In
singular, the second person refers to the addressee of the utterance
/ text. In plural, it may mean several addressees and optionally some
third persons too.

Examples:
[en]
<span style='color: red'><I>you</I></span>;
[cs] <span style='color: red'><I>dělá</I></span><span style='color: red'><I>š</I></span>
(<span style='color: red'>you</span>
do)

### 3: third person

The
third person refers to one or more persons that are neither speakers
nor addressees.

Examples:
[en]
<span style='color: red'><I>he</I></span><I>,
</I><span style='color: red'><I>she</I></span><I>,
</I><span style='color: red'><I>it</I></span><I>,
</I><span style='color: red'><I>they</I></span>;
[cs] <span style='color: red'><I>dělá</I></span>
(<span style='color: red'>he/she/it</span><span style='color: red'>
do</span><span style='color: red'>es</span>)

## Politeness

Various
languages have various means to express politeness or respect; some
of the means are morphological.

In
quite a few languages the polite mode involves changing pronoun,
person or number when addressing or talking about a respectable
person. In Czech, 2<SUP>nd</SUP> person plural is used instead of
singular; this involves both the pronoun and the finite verb but not
a participle, which remains in singular. In this case, different
words are selected but all of them also exist in the informal mode.
The change is that morphological plural may now be either semantic
singular or plural.

In
German, Spanish or Hindi, both number and person are changed
(morphological 3<SUP>rd</SUP>
person is used as semantic 2<SUP>nd</SUP>
person) and in addition, special pronouns are used that do not appear
in the informal register ([de] <I>Sie</I>;
[es] <I>usted,
ustedes</I>;
[hi] आप
<I>āpa</I>).

In
Japanese, verbs
and other words have polite and informal forms but
the polite register is not restricted to addressing people.

### Inf: informal register

Usage
varies but if the language distinguishes levels of politeness, then
the informal register is usually meant for communication with family
members and close friends.

Examples:
[cs]
<span style='color: red'><I>ty
</I></span><span style='color: red'><I>jdeš
</I></span><span style='color: red'><I>/
vy </I></span><span style='color: red'><I>jdete</I></span>
(you
go.Sing/Plur);
[de]
<span style='color: red'><I>du
</I></span><span style='color: red'><I>gehst
</I></span><span style='color: red'><I>/
ihr </I></span><span style='color: red'><I>geht</I></span>
(you go.Sing/Plur); [es] <span style='color: red'><I>tú
vas / vosotros vais</I></span>
(you
go.Sing/Plur); [ja]
<FONT SIZE=2 STYLE="font-size: 10pt"><span style='color: red'>行かない
</span></FONT><span style='color: red'><I>ikanai</I></span>
(will
not go)<I>.</I>

### Pol: polite register

Usage
varies but if the language distinguishes levels of politeness, then
the polite register is usually meant for communication with strangers
and people of higher social status than the one of the speaker.

Examples:
[cs]
<span style='color: red'><I>vy
</I></span><span style='color: red'><I>jdete</I></span>
(you
go.Sing/Plur);
[de]
<span style='color: red'><I>Sie
</I></span><span style='color: red'><I>gehen</I></span>
(you go.Sing/Plur); [es] <span style='color: red'><I>usted
</I></span><span style='color: red'><I>va
/ ustedes van</I></span>
(you
go.Sing/Plur); [ja]
<FONT SIZE=2 STYLE="font-size: 10pt"><span style='color: red'>行きません
</span></FONT><span style='color: red'><I>ikimasen</I></span>
(will
not go).

## PossGender

Possessive
adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The PossGender
feature captures the possessor's gender. For simplicity, the set of
possible values is identical to Gender, although only a subset has
been observed in corpora so far.

In
the Czech examples below, the masculine PossGender implies using one
of the suffixes <I>-</I><I>ův, -ova, -ovo,</I>
and the feminine PossGender implies using one of <I>-</I><I>in,
-ina, -ino</I>.

### Masc: masculine possessor

Examples:
[cs]
<span style='color: red'><I>otcův
syn</I></span>
(father's
son; PossGender=Masc|Gender=Masc);
<span style='color: red'><I>otcova
dcera</I></span>
(father's
daughter; PossGender=Masc|Gender=Fem);
<span style='color: red'><I>otcovo
dítě</I></span>
(father's
child; PossGender=Masc|Gender=Neut).

### Fem: feminine possessor

Examples:
[cs]
<span style='color: red'><I>m</I></span><span style='color: red'><I>atčin
syn</I></span>
(mother's
son; PossGender=Fem|Gender=Masc);
<span style='color: red'><I>matčina
dcera</I></span>
(mother's
daughter; PossGender=Fem|Gender=Fem);
<span style='color: red'><I>matčino
dítě</I></span>
(mother's
child; PossGender=Fem|Gender=Neut).

## PossNumber

Possessives
may have two different numbers: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
PossNumber feature captures the possessor's number. For simplicity,
the set of possible values is identical to Number, although only a
subset has been observed in corpora so far.

### Sing: singular possessor

Examples:
[en]
<span style='color: red'><I>my,
his</I></span><span style='color: red'><I>,
her, its</I></span>;
[cs]
<span style='color: red'><I>můj</I></span><I>
pes</I>
(my
dog; PossNumber=Sing|Number=Sing); <span style='color: red'><I>mí</I></span><I>
psi</I>
(my
dogs; PossNumber=Sing|Number=Plur).

### Plur: plural possessor

Examples:
[en]
<span style='color: red'><I>our,
t</I></span><span style='color: red'><I>heir</I></span>;
[cs]
<span style='color: red'><I>náš</I></span><I>
pes</I>
(our
dog; PossNumber=Plur|Number=Sing); <span style='color: red'><I>naši</I></span><I>
psi</I>
(our
dogs; PossNumber=Plur|Number=Plur).

## PossedNumber

PossedNumber
is the possessee's (possessed, owned noun phrase's) number. In
Hungarian, possession can be marked on the possessor or on the
possessed. It is possible, though rare, that a noun has three
distinct number features: its own grammatical number, number of its
possessor and number of its possession. Examples from the
Multext-East Hungarian lexicon:

<UL>
	<LI><I>könnyedén</I> (SSS)

	<UL>
		<LI><I>könny</I> = a tear (singular)

		<LI><I>könnyed</I> = your tear
		(singular owner)

		<LI><I>könnyedé</I> = (possession) of
		your tear (singular possession)

		<LI><I>könnyedén</I> = (on the
		possession) of your tear (superessive case)

	</UL>
	<LI><I>ellenfeleié</I> (PSS)

	<UL>
		<LI><I>ellenfél</I> = an opponent
		(singular)

		<LI><I>ellenfele</I> = his/her/its
		opponent (singular owner)

		<LI><I>ellenfelei</I> = his/her/its
		opponents (core plural, singular owner)

		<LI><I>ellenfeleié</I> = (possession)
		of his/her/its opponents (singular possession)

	</UL>
	<LI><I>életeké</I> (SPS)

	<UL>
		<LI><I>él</I> = point (singular)

		<LI><I>élek</I> = points (plural)

		<LI><I>élén</I> = his/her/its point
		(singular owner)

		<LI><I>élünk</I> = our point (plural
		owner)

		<LI><I>életeké</I> = (possession) of
		our point (singular possession)

	</UL>
	<LI><I>tárgyalópartnereinkét</I> (PPS)

	<UL>
		<LI><I>tárgyalópartner</I> =
		negotiator (singular)

		<LI><I>tárgyalópartnerei</I> =
		his/her/its negotiators (plural, singular owner)

		<LI><I>tárgyalópartnereinkét</I> = (possession) of our
		negotiators (plural, plural owner, singular possession, accusative
		case)

	</UL>
</UL>
Words marked for plural possessions are very rare, though. Note
that in the following example from Multext-East, Columbus is marked
for plural possession, but not for his own owner. 


<UL>
	<LI><I>Kolumbuszéinál</I>

	<UL>
		<LI><I>Kolumbusz</I> = Columbus
		(singular)

		<LI><I>Kolumbuszéi</I> =
		(possessions) of Columbus (plural possession)

		<LI><I>Kolumbuszéinál</I> = (at the possessions) of Columbus
		(adessive case)

	</UL>
</UL>
### Sing: singular possession

### Plur: plural possession

## PossPerson

PossPerson
is possessor's person, marked e.g. on Hungarian nouns. These noun
forms would be translated to English as possessive pronoun + noun.

Note
that there is currently a sort of inconsitency in Interset: since
this feature was introduced, it would be logical to use it also for
possessive pronouns in other languages. Yet the possessor's person of
these pronouns is traditionally captured in the &ldquo;Person&rdquo;
feature. Also note that using PossPerson for possessive pronouns
might introduce inconsistency at the other end because in some
languages, possessive pronouns are actually identical to personal
pronouns in the genitive case.

### 1: first person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyám</I></span>
=
my dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>nk</I></span>
=
our dog.

### 2: second person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>d</I></span>
=
your.Sing dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>tok</I></span>
=
your.Plur dog.

### 3: third person possessor

Examples:
[hu]
<I>kutya</I>
= dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>ja</I></span>
=
his/her/its dog;
<span style='color: red'><I>kutyá</I></span><span style='color: red'><I>juk</I></span>
=
their dog.

## VerbForm

Even
though the name of the feature seems to suggest that it is used
exclusively with verbs, it is not the case. Some verb forms in some
languages actually form a gray zone between verbs and other parts of
speech (nouns, adjectives and adverbs). For instance, participles may
be either classified as verbs or as adjectives, depending on language
and context. In both cases VerbForm=Part may be used to separate them
from other verb forms or other types of adjectives.

### Fin: finite verb

Rule
of thumb: if it has non-empty Mood, it is finite. But beware that
some tagsets conflate verb forms and moods into one feature.

Examples:
[en]
<I>I
</I><span style='color: red'><I>do</I></span><I>,
he </I><span style='color: red'><I>does</I></span>.

### Inf: infinitive

Infinitive is
the citation form of verbs in many languages. Unlike in English, it
often has morphological form that is distinct from the finite forms.
Infinitives may be used together with auxiliaries to form
periphrastic tenses (e.g. future tense [cs] <I>budu
</I><span style='color: red'><I>sedět</I></span><I>
v letadle</I>
(I
will sit in a plane)), they appear as arguments of modal verbs etc.
In some languages they behave similarly to nouns and are used as such
(similar to the gerund in English).

Examples:
[de]
<I>ich
muss </I><span style='color: red'><I>gehen</I></span>
(I must go).

### Sup: supine

Supine is a rare verb form. It
survives in some Slavic languages (Slovenian) and is used instead of
infinitive as the argument of motion verbs <I>(I must go)</I>.

A form called &ldquo;supine&rdquo; also
exists in Swedish but I think that the usage is different there
(Joakim?)

### Part: participle

Participle
is a non-finite verb form that shares properties of verbs and
adjectives. Its usage varies across languages. It may be used to form
various periphrastic verb forms such as complex tenses and passives;
it may be also used purely adjectively.

Other
features may help to distinguish past/present participles (English),
active/passive participles (Czech), imperfect/perfect participles
(Hindi) etc.

Examples:
[en]
<I>he
could have </I><span style='color: red'><I>been
prepared</I></span><I>
if he had </I><span style='color: red'><I>forseen</I></span><I>
it</I>;
<I>I
will be </I><span style='color: red'><I>driving</I></span><I>
home</I>.

### Trans: transgressive

The
transgressive, also called adverbial participle, is a non-finite verb
form that shares properties of verbs and adverbs. It appears e.g. in
Slavic and Indo-Aryan languages.

Examples:
[cs] <I>zírali na
mne, pevně </I><span style='color: red'><I>svírajíce</I></span><I>
své zbraně</I>
(they stared at me <span style='color: red'>while
gripping</span> their guns firmly); <span style='color: red'><I>udělavši</I></span><I>
večeři, zavolala rodinu ke stolu</I>
(<span style='color: red'>having
prepared</span> the dinner, she called her
family to the table).

### Ger: gerund

Gerund
is a non-finite verb form that shares properties of verbs and nouns.
In English it shares the morphological
form with present participle, which may mean that the tagset will not
distinguish it from the participle.

Examples:
[en] <I>I look forward to </I><span style='color: red'><I>seeing</I></span><I>
you</I>; <I>he
turns a blind eye to my </I><span style='color: red'><I>being</I></span><I>
late</I>.

## Mood

Mood
is a feature that expresses modality and subclassifies finite verb
forms.

### Ind: indicative

The
indicative can be considered the default mood. A verb in indicative
merely states that something happens, has happened or will happen,
without adding any attitude of the speaker.

Examples:
[cs] <span style='color: red'><I>Studuješ</I></span><I>
na univerzitě.</I> [de]
<span style='color: red'><I>Du studierst</I></span><I>
an der Universität.</I>
(<span style='color: red'>You
study</span> at the university.)

### Imp: imperative

The
speaker uses imperative to order or ask the addressee to do the
action of the verb.

Examples:
[cs] <span style='color: red'><I>Studuj</I></span><I>
na univerzitě!</I> [de]
<span style='color: red'><I>Studiere</I></span><I>
an der Universität!</I>
(<span style='color: red'>S</span><span style='color: red'>tudy</span>
at the university!)

### Cnd: conditional

The
conditional mood is used to express actions that would have taken
place under some circumstances but they actually did not / do not
happen. Grammars of some languages may classify conditional as tense
(rather than mood) but e.g. in Czech it combines with two different
tenses (past and present).

Examples:
[cs] <I>Kdy</I><span style='color: red'><I>bych</I></span><I>
byl chytrý, studoval </I><span style='color: red'><I>bych</I></span><I>
na univerzitě.</I>
(If
I were smart I <span style='color: red'>would</span>
study at the university;
note that only the auxiliary <I>bych</I>
is specific to conditional; the active participle <I>byl</I>
is also needed to analytically form the conditional mood, however, it
will only be tagged as participle because it can also be used to form
past tense indicative.)

### Pot: potential

The
action of the verb is likely but not certain. Used e.g. in Finnish.

### Sub: subjunctive / conjunctive

The
subjunctive mood is used under certain circumstances in subordinate
clauses, typically for actions that are subjective or otherwise
uncertain. In German, it may be also used to convey the conditional
meaning.

Examples:
[fr] <I>Je veux que tu le </I><span style='color: red'><I>fasses</I></span><I>.</I>
(I want you to do it; lit. I want that you it
do.Sub.)

### Jus: jussive

The
jussive mood expresses the desire that the action happens. Used e.g.
in Arabic.

### Qot: quotative

The
quotative mood is used e.g. in Estonian to denote direct speech.

### Opt: optative

Used
e.g. in Turkish in exclamations like &ldquo;May you have a long
life!&rdquo; or &ldquo;If only I were rich!&rdquo;

### Des: desiderative

The
desiderative mood corresponds to the modal verb &ldquo;want to&rdquo;:
&ldquo;He <span style='color: red'>wants to come</span>.&rdquo;
Used e.g. in Turkish.

### Nec: necessitative

The
necessitative
mood corresponds to the modal verbs
&ldquo;must, should, have to&rdquo;:
&ldquo;He <span style='color: red'>must</span><span style='color: red'>
come</span>.&rdquo; Used e.g. in Turkish.

## Tense

Tense
is a feature that specifies the time when the action took / takes /
will take place, in relation to the current moment or to another
action in the utterance. In some languages (e.g. English), some
tenses are actually combinations of tense and aspect. In other
languages (e.g. Czech), aspect and tense are separate, although not
completely independent of each other.

Note
that we are defining features that apply to a single word. If a tense
is constructed periphrastically (two or more words, e.g. auxiliary
verb indicative + participle of the main verb) and none of the
participating words are specific to this tense, then the features
will probably not directly reveal the tense. For instance, [en] <I>&ldquo;I
</I><span style='color: red'><I>had been</I></span><I> there&rdquo;</I>
is past perfect (pluperfect) tense, formed periphrastically by the
simple past tense of the auxiliary <I>to have</I> and the past
participle of the main verb <I>to be</I>. The auxiliary will be
tagged VerbForm=Fin|Mood=Ind|Tense=Past
and the participle will have VerbForm=Part|Tense=Past;
none of the two will have Tense=Pqp.
On the other hand, Portuguese can form the pluperfect morphologically
as just one word, which will thus be tagged
VerbForm=Fin|Mood=Ind|Tense=Pqp.

### Past: past tense

The
past tense denotes actions that happened before the current moment.
In English, this is the simple past
form. In German, this is the Präteritum.
In Turkish, this is the non-narrative past. In Bulgarian, there are
two synthetic past tenses, called aorist and imperfect; thus one of
these two values is used and past is not used. (<SPAN STYLE="background: #ffff00">Note
DZ: perhaps we should merge aorist with past and leave the imperfect
as the specific case.</SPAN>)

Examples:
[en] <I>he </I><span style='color: red'><I>went</I></span><I>
home</I>

### Pres: present tense

The
present tense denotes actions that are happening right now or that
usually happen.

Examples:
[en] <I>he </I><span style='color: red'><I>goes</I></span><I>
home</I>

### Fut: future tense

The
future
tense denotes actions that will happen
after the current moment.

Examples:
[es] <span style='color: red'><I>irá</I></span><I>
</I><I>a la casa</I>
(he/she/it
will go home)

### Aor: aorist

Aorist
is a special case of the past tense. In Bulgarian, this is the
aspect-neutral past tense that can be used freely with both
imperfective and perfective verbs (see also imperfect).
(<SPAN STYLE="background: #ffff00">Note
DZ: perhaps we should merge aorist with past and leave the imperfect
as the specific case.</SPAN>)

### Imp: imperfect

Used
in e.g. Bulgarian and Croatian, imperfect is a special case of the
past tense.
Note that,
unfortunately, imperfect tense is not always the same as past tense +
imperfective aspect. For instance, in Bulgarian, there is lexical
aspect, inherent in verb meaning, and grammatical aspect, which does
not necessarily always match the lexical one. In main clauses,
imperfective verbs can have imperfect tense and perfective verbs have
perfect tense. However, both rules can be violated in embedded
clauses.

### Nar: narrative

Special case of
the past tense, this is the Turkish <EM>miş</EM>-past.
The difference is whether the speaker personally witnessed the action
he is describing, or not.

### Pqp: pluperfect

The pluperfect
denotes action that happened before another action in past. This
value does not apply to English where the pluperfect (past perfect)
is constructed analytically. It applies e.g. to Portuguese.

## Aspect

Aspect is a feature
that specifies duration of the action in time, whether the action has
been completed etc. In some languages (e.g. English), some tenses are
actually combinations of tense and aspect. In other languages (e.g.
Czech), aspect and tense are separate, although not completely
independent of each other.

In
Czech and other Slavic languages, aspect is a lexical feature. Pairs
of imperfective and perfective verbs exist and are often
morphologically related but the space is highly irregular and the
verbs are considered to belong to separate lemmas.

Interset
currently covers only a few aspect values that occurred as feature in
the corpora we have studied. See Wikipedia
(<A HREF="http://en.wikipedia.org/wiki/Grammatical_aspect">http://en.wikipedia.org/wiki/Grammatical_aspect</A>)
for a long list of other possible aspects.

### Imp: imperfect aspect

The action took / takes / will take some
time span and there is no information whether and when it was / will
be completed.

Examples: [cs]<I>
</I><I>péci</I>
=
to bake (Imp); <span style='color: red'><I>pekl</I></span><I>
chleba</I>
(he
baked / was baking a bread)

### Perf: perfect aspect

The action has been / will have been
completed. Since there is emphasis on one point on the time scale
(the point of completion), this aspect does not work well with the
present tense. For example, Czech morphology can create present forms
of perfective verbs but these actually have a future meaning.

Examples: [cs]<I>
</I><I>up</I><I>éci</I>
=
to bake (Perf); <span style='color: red'><I>upekl</I></span><I>
chleba</I>
(he
baked / has baked a bread)

### Pro: prospective aspect

Used in Basque. A combination
of tense and aspect that indicates the action is in preparation to
take place.

### Prog: progressive aspect

English
progressive tenses <I>(I am eating, I
have been doing &hellip;)</I> have this
aspect. They are constructed analytically (auxiliary + present
participle) but the <I>-ing</I>
participle is so bound to progressive meaning that it seems a good
idea to annotate it with this feature (we have to distinguish it from
the past participle somehow; we may use both the &ldquo;Tense&rdquo;
and the &ldquo;Aspect&rdquo; features).

In
languages other than English, the progressive meaning may be
expressed by morphemes bound to the main verb, which makes this value
even more justified. Example is Turkish.

## Voice

For
Indo-European speakers, voice means mainly the active-passive
distinction. In other languages, other shades of verb meaning are
categorized as voice.

### Act: active voice

The subject of the verb is the doer of the
action (agent), the object is affected by the action (pacient).

Examples: [cs] <span style='color: red'><I>Napadli</I></span><I>
jsme nepřítele.</I>
(We
<span style='color: red'>attacked</span>
the enemy; the active participle <I>napadli</I>
can
be used to form either past tense or conditional mood; here it forms
the past tense.)

### Pass: passive voice

The subject of the verb is affected by the
action (pacient). The doer (agent) is either unexpressed or it
appears as an object of the verb.

Examples: [cs] <I>J</I><I>sme
</I><span style='color: red'><I>napadeni</I></span><I>
nepřítelem.</I>
(We
are <span style='color: red'>attacked</span>
by the enemy; the passive participle <I>napadeni</I>
is
used to form passive in all tenses; here it forms the present
passive.)

### Rcp: reciprocal voice

Examples: [tr]
<span style='color: red'><I>karıştı</I></span><I>,
</I><span style='color: red'><I>tutuştular</I></span>

### Cau: causative voice

<A HREF="https://wiki.ufal.ms.mff.cuni.cz/_media/user:zeman:treebanks:ttbankkl.pdf">Documentation</A>
of the METU Sabanci treebank classifies causative as voice (page 26).
Note that this is a feature of verbs. There are languages that have
also the causative case of nouns.

Examples: [tr]
<span style='color: red'><I>karıştırıyor</I></span>
(is
confusing)

## Style

This
may be a lexical feature (some words-lemmas are archaic, some are
colloquial) or a morphological feature (inflectional patterns may
systematically change between dialects or styles). It could be used
in many languages but only a few choose to actually annotate it. Seen
in Bulgarian, Czech, Danish, Finnish and Hungarian.

### Arch: archaic, obsolete

### Rare: rare

### Form: formal, literary

### Poet: poetic

### Norm: normal, neutral

### Coll: colloquial

### Vrnc: vernacular

### Slng: slang

### Expr: expressive, emotional

### Derg: derogative

### Vulg: vulgar

<BR><BR>


<BR><BR>



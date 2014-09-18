---
layout: base
title: 'Case'
shortdef: 'case'
---

## {{ page.title }}: {{ page.shortdef }}

Case is usually inflectional feature of
<a href="../ud-pos/NOUN.html">nouns</a> and, depending on language, other parts of speech (<a href="../ud-pos/ADJ.html">adjectives</a>,
<a href="../ud-pos/NUM.html">numerals</a>) that mark agreement with nouns. In some tagsets it is also
valency feature of <a href="../ud-pos/ADP.html">adpositions</a> (saying that the adposition requires
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
language. Cf. the [ud-dep/case]() dependency label.

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
same as the feature of possessivity ([Poss]()). Possessivity is a lexical
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
and the noun <I>dcery</I>
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
(see the feature of [Animacy]()). Nevertheless this is not a
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
We propose one label for both instrumental and instructive
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
state, often it corresponds to English &ldquo;as a &hellip;&rdquo;
A similar case in Basque is called prolative and it should be tagged `Ess` too.

Examples:
[fi] <I>lapsi</I> = child; <span style='color: red'><I>lapsena</I></span> = as a child / when he was child;
[et] <I>laps</I> = child; <I><span style='color:red'>lapsena</span></I> = as a child;
[eu] <I>erreformista</I> = reformer; <span style='color: red'><I>erreformistatzat</I></span> = as a reformer.

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

The
lative case denotes
movement towards/to/into/onto something. Similar case in Basque is
called directional allative (Spanish <EM>adlativo
direccional</EM>).
However, lative is typically thought of as a union of allative,
illative and sublative, while in Basque it is derived from allative,
which also exists independently.

Examples:
[eu] <I>behe</I>
= low; <span style='color: red'><I>beherantz</I></span>
= down.

### Tem: temporal

The
temporal
case is used to indicate
time.

Examples:
[hu]
<I>hétkor</I>
= at seven (o'clock);
<I>éjfélkor</I>
= at midnight;
<I>karácsonykor</I>
= at Christmas.

### Ter: terminative / terminal allative

The
terminative
case specifies where something ends in space or time. Similar
case in Basque is called terminal allative (Spanish <EM>adlativo
terminal</EM>). 


Examples:
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
= up to the half.

### Cau: causative / motivative

Noun
in this case is the cause of something. In
Hungarian it also seems to be used frequently with currency (&ldquo;to
buy something <I>for</I>
the money&rdquo;)

Examples:
[hu]
<I>Egy
világcég benzinkútjánál 7183 </I><span style='color: red'><I>forintért</I></span><I>
tankoltam.</I> [eu]
<I>jokaera</I>
= behavior; <span style='color: red'><I>jokaeragatik</I></span>
= because of behavior.

### Ben: benefactive / destinative

The
benefactive case corresponds to the English preposition <I>for</I>.

Examples:
[eu]
<I>mutil</I>
= boy;
<span style='color: red'><I>mutilarentzat</I></span>
= for boys.

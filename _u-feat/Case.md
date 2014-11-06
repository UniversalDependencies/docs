---
layout: feature
title: 'Case'
shortdef: 'case'
---

Case is usually an inflectional feature of [nouns](u-pos/NOUN) and,
depending on language, other parts of speech ([adjectives](u-pos/ADJ),
[numerals](u-pos/NUM)) that mark agreement with nouns. In some tagsets
it is also valency feature of [adpositions](u-pos/ADP) (saying that
the adposition requires its argument to be in that case).

Case helps specify the role of the noun
phrase in the sentence, especially in free-word-order languages. For
example, the nominative and accusative cases often distinguish
subject and object of the verb, while in fixed-word-order languages
these functions would be distinguished merely by the positions of the
nouns in the sentence.

Here on the level of morphosyntactic
features we are dealing with case expressed morphologically, i.e. by
bound morphemes (affixes). Note that on a higher level case can be
understood more broadly as _the role,_ and it can be also
expressed by adding an adposition to the noun. What is expressed by
affixes in one language can be expressed using adpositions in another
language. Cf. the [u-dep/case]() dependency label.

Examples: [cs] nominative _matka_
(mother), genitive _matky_,
dative _matce_, accusative _matku_,
vocative _matko_, locative _matce_,
instrumental _matkou_;
[de] nominative _der Mann_ (the man), genitive _des
Mannes_, dative _dem Mann_, accusative _den Mann_;
[en] nominative/direct case _he, she_, accusative/oblique
case _him, her._

The descriptions of the individual case
values below include semantic hints about the prototypical meaning of
the case. Bear in mind that quite often a case will be used for a
meaning that is totally unrelated to the meaning mentioned here.
Valency of verbs, adpositions and other words will determine that the
noun phrase must be in a particular grammatical case to fill a
particular valency slot (semantic role). It is much the same as
trying to explain the meaning of prepositions: most people would
agree that the central meaning of English _in_ is location in
space or time but there are phrases where the meaning is less
locational: _In God we trust. __Say it in English._

Note
that Indian corpora based on the so-called Paninian model use a
related feature called _vibhakti_.
It is a merger of the Case feature described here and of various
postpositions. Values of the feature are language-dependent because
they are copies of the relevant morphemes (either bound morphemes or
postpositions). Vibhakti
can be mapped on the Case values described here if we know 1. which
source values are bound morphemes (postpositions are separate nodes
for us) and 2. what is their meaning. For instance, the genitive case
(Gen) in Bengali is marked using the suffix _-ra_
(-র),
i.e. vib=era.
In Hindi, the suffix has been split off the noun and
it is now written as a separate word &ndash; the postposition
_kā/kī/ke_
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

In many languages this is the word form used for indirect objects of verbs.

Example:
[de] _Ich gebe _<span style='color: red'>_meinem
Bruder_</span>_ ein Geschenk._
(I
give my brother a present.) &ldquo;meinem Bruder&rdquo; (my brother)
is dative and &ldquo;ein Geschenk&rdquo; (a present) is accusative.

### Gen: genitive

Prototypical
meaning of genitive is that the noun phrase somehow belongs to its
governor; it would often be translated by the English preposition _of_.
English has the &ldquo;saxon genitive&rdquo; formed by the suffix _'s_;
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
possessing. For example, [cs] _bez
prezidentovy dcery_
(without
the president's daughter) is a prepositional phrase containing the
preposition _bez_
(without),
the possessive adjective _prezidentovy_
(president's)
and the noun _dcery_
(daughter).
The possessive adjective is derived from the noun _prezident_
but
it is really an adjective (with separate lemma and paradigm), not
just a form of the noun. In addition, both the adjective and the noun
are in their genitive forms (the nominative would be _prezidentova
dcera_).
There is nothing possessive about this particular occurrence of the
genitive. It is there because the preposition _bez_
always
requires its argument to be in genitive.

Example: [cs] _Praha
je hlavní město _<span style='color: red'>_České
republiky_</span>_._
(Prague is the capital <span style='color: red'>of the Czech
Republic</span>.)

Note that in
Basque, Gen should be used for possessive
genitive (as opposed to locative genitive): <span style='color: red'>_diktadorearen_</span>_
erregimena_ (dictator's regime;
_diktadore_ = dictator).

### Voc: vocative

The vocative
case is a special form of noun used
to address someone. Thus it predominantly appears with animate nouns
(see the feature of [Animacy]()). Nevertheless this is not a
grammatical restriction and inanimate
things can be addressed as well.

Example: [cs]
_Co myslíš, _<span style='color: red'>_Filip_</span><span style='color: red'>_e_</span>_?_
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
_V _<span style='color: red'>_červenci_</span>_
jsem byl ve _<span style='color: red'>_Švédsku_</span>_._
(In
<span style='color: red'>July</span>
I was in <span style='color: red'>Sweden</span>.)

Non-locational
non-temporal example: [cs] _Mluvili
jsme tam o _<span style='color: red'>_morfologii_</span>_._
(We
talked there
about <span style='color: red'>morphology</span>.)

### Ins: instrumental / instructive

The role from
which the name of the instrumental case is derived is that the noun
is used as instrument to do something (as in [cs] _psát
_<span style='color: red'>_perem_</span>
(to
write <span style='color: red'>using
a pen</span>)).
Many other meanings are possible, e.g. in Czech the instrumental is
required by the preposition _s_
(with)
and thus it includes the meaning expressed in other languages by the
comitative case.

In Czech the
instrumental is also used for the agent-object in passive
constructions (cf. the English preposition _by_).

Passive
example: [cs] _Tento zákon byl
schválen _<span style='color: red'>_vládou_</span>_._
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
_lähteä_
=
to leave; _2003 _<span style='color: red'>_lähtien_</span>
(second
infinitive in the instructive case: since 2003); _yllättää_
=
to surprise; _sekaantui _<span style='color: red'>_yllättäen_</span>_
valtataisteluun_
(lit.
was-involved-in by-surprise.Ins
power-struggle.Ill).

### Par: partitive

In Finnish the partitive case expresses
indefinite identity and unfinished actions without result.

Examples: [fi]
_kolme _<span style='color: red'>_taloa_</span>
(three
<span style='color: red'>houses</span>;
the _-a_
suffix of _talo_);
_rakastan tätä _<span style='color: red'>_taloa_</span>
(I
love this <span style='color: red'>house</span>);
_saanko lainata _<span style='color: red'>_kirjaa_</span>_?_
(can
I borrow the <span style='color: red'>book</span>?;
the _-a_
suffix of _kirja_);
_lasissa on _<span style='color: red'>_maitoa_</span>
(there
is (some) <span style='color: red'>milk</span>
in the glass).

Examples
comparing partitive with accusative: _ammuin
karhun_
(I shot a bear.Acc (and I know that it is dead)); _ammuin
karhua_
(I shot at a bear.Par (but I may have missed)).

Using
accusative instead of partitive may also substitute the missing
future tense: _luen kirjan_
(I will read the book.Acc); _luen
kirjaa_
(I am reading the book.Par).

### Dis: distributive

The distributive case conveys that
something happened to every member of a set, one in a time. Or it may
express frequency.

Examples: [hu]
_<span style='color:red'>fejenként</span>_
(per
capita); _<span style='color:red'>esetenként</span>_
(in
some cases); _<span style='color:red'>hetenként</span>_
(once
per week, weekly); _<span style='color:red'>tízpercenként</span>_
(every
ten minutes).

### Ess: essive / prolative

The essive case expresses a temporary
state, often it corresponds to English &ldquo;as a &hellip;&rdquo;
A similar case in Basque is called prolative and it should be tagged `Ess` too.

Examples:
[fi] _lapsi_ = child; <span style='color: red'>_lapsena_</span> = as a child / when he/she was child;
[et] _laps_ = child; _<span style='color:red'>lapsena</span>_ = as a child;
[eu] _erreformista_ = reformer; <span style='color: red'>_erreformistatzat_</span> = as a reformer.

### Tra: translative / factive

The translative case expresses a change
of state (&ldquo;it becomes X&rdquo;, &ldquo;it changes to X&rdquo;).
Also used for the phrase &ldquo;in language X&rdquo;. In the Szeged
Treebank [hu], this case is called factive.

Examples: [fi]
_pitkä_
=
long; _kasvoi _<span style='color: red'>_pitkäksi_</span>
=
grew long; _englanti_
= English language; <span style='color: red'>_englanniksi_</span>
= in/into English; _kello kuusi_
= six o'clock; _kello _<span style='color: red'>_kuudeksi_</span>
= by six o'clock; [et] _kell
kuus_ =
six o'clock; _kella _<span style='color: red'>_kuueks_</span>
= by six o'clock; [hu] _Oroszlány
halott _<span style='color: red'>_várossá_</span>_
válhat._
= lit. Oroszlány dead city.Tra
could-become. = Oroszlány could become a dead city.

### Com: comitative / associative

The comitative (also called
associative) case corresponds to English &ldquo;together with &hellip;&rdquo;

Examples: [et]
_koer_
=
dog;
<span style='color: red'>_koeraga_</span>
=
with
dog.

### Abe: abessive

The abessive
case corresponds to the
English preposition _without_.

Examples: [fi]
_raha_
=
money;
<span style='color: red'>_rahatta_</span>
=
without
money.

### Ine: inessive

The inessive
case expresses location inside of something.

Examples: [hu]
_ház_
=
house;
<span style='color: red'>_házban_</span>
=
in
the house; [fi] _talo_
= house; <span style='color: red'>_talossa_</span>
= in the house; [et] _maja_
= house; <span style='color: red'>_majas_</span>
= in the house.

### Ill: illative

The illative
case expresses direction
into
something.

Examples: [hu]
_ház_
=
house;
<span style='color: red'>_házb_</span><span style='color: red'>_a_</span>
=
into
the house; [fi] _talo_
= house; <span style='color: red'>_talo_</span><span style='color: red'>_on_</span>
= into
the house; [et] _maja_
= house; <span style='color: red'>_majas_</span><span style='color: red'>_se
/ majja_</span>
= into
the house.

### Ela: elative

The elative
case expresses direction
out
of something.

Examples: [hu]
_ház_
=
house;
<span style='color: red'>_házból_</span>
=
from
the house; [fi] _talo_
= house; <span style='color: red'>_talos_</span><span style='color: red'>_t_</span><span style='color: red'>_a_</span>
= from
the house; [et] _maja_
= house; <span style='color: red'>_majas_</span><span style='color: red'>_t_</span>
= from
the house.

### Add: additive

Distinguished by some scholars in
Estonian, not recognized by traditional grammar, exists in the
Multext-East Estonian tagset and in the Eesti keele puudepank.
Reportedly same or similar meaning as illative. Forms of this case
exist only in singular and not for all nouns.

### Ade: adessive

The adessive case expresses location at or on something.
The corresponding directional cases are allative (towards something) and
ablative (from something).

Examples: [hu]
_pénztár_
=
cash
desk;
<span style='color: red'>_pénztárnál_</span>
=
at
the cash desk;
[fi] _pöytä_
= table;
<span style='color: red'>_pöydällä_</span>
= on
the table;
[et] _laud_
= table;
<span style='color: red'>_laual_</span>
= on
the table.

Note that adessive is used to express location on the surface of
something in Finnish and Estonian, but does not carry this meaning
in Hungarian.

### All: allative

The allative case expresses direction to something (destination
is adessive, i.e. at or on that something).

Examples: [hu]
_pénztár_
=
cash
desk;
<span style='color: red'>_pénztár_</span><span style='color: red'>_hoz_</span>
=
to
the cash desk;
[fi]
_pöytä_
= table;
<span style='color: red'>_pöydäll_</span><span style='color: red'>_e_</span>
= onto
the table.

### Abl: ablative

Prototypical meaning: direction from
some point.

Examples: [hu]
a <span style='color: red'>_barátomtól_</span>
jövök (I'm
coming <span style='color: red'>from
my friend</span>);
[fi]
_pöydältä_
(from
the table);
_katolta_
(from
the roof);
_rannalta_
(from
the beach)

### Sup: superessive

Used,
chiefly <A HREF="http://www.hungarianreference.com/Nouns/-n-superessive.aspx">in
Hungarian</A>, to
indicate location on top of something or on the surface of something.

Examples: [hu]
_asztal_
=
table;
<span style='color: red'>_asztalon_</span>
=
on
the table;
_könyvek_
=
books; <span style='color: red'>_könyveken_</span>
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
_Belgrádtól 150 _<span style='color: red'>_kilométerre
délnyugatra_</span>
= lit.
Belgrade.Abl
150 kilometer.Sub southwest.Sub = 150 kilometers southwest of
Belgrade; _hajó_
=
ship; <span style='color: red'>_hajóra_</span>
=
onto the ship; <span style='color: red'>_bokorra_</span>
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
_asztal_
=
table;
_az _<span style='color: red'>_asztal_</span><span style='color: red'>_ról_</span>
=
off
the table;
<span style='color: red'>_Budapestről_</span>_
jövök_
= I
am coming from Budapest.

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
[eu] _behe_
= low; <span style='color: red'>_beherantz_</span>
= down.

### Tem: temporal

The
temporal
case is used to indicate
time.

Examples:
[hu]
_<span style='color:red'>hétkor</span>_
= at seven (o'clock);
_<span style='color:red'>éjfélkor</span>_
= at midnight;
_<span style='color:red'>karácsonykor</span>_
= at Christmas.

### Ter: terminative / terminal allative

The
terminative
case specifies where something ends in space or time. Similar
case in Basque is called terminal allative (Spanish <EM>adlativo
terminal</EM>). 


Examples:
[et]
<span style='color: red'>_j&otilde;eni_</span>
= down to the river; _kella
_<span style='color: red'>_kuueni_</span>
= till six o'clock; [hu] _a
_<span style='color: red'>_házig_</span>
= up to the house; _hat
_<span style='color: red'>_óráig_</span>
= till six o'clock; [eu] _erdi_
= half; <span style='color: red'>_erdiraino_</span>
= up to the half.

### Cau: causative / motivative

Noun
in this case is the cause of something. In
Hungarian it also seems to be used frequently with currency (&ldquo;to
buy something _for_
the money&rdquo;) and it also can mean the goal of something.

Examples:
[hu]
_Egy
világcég benzinkútjánál 7183 _<span style='color: red'>_forintért_</span>_
tankoltam._ = lit. a world-wide.company petrol.station.Ade 7183 forint.Cau refueled = I refueled my car at the petrol station of a world-wide company for 7183 forints. 
_Elmentem a boltba_ <span style='color: red'>_tejért_</span>_._ = lit. went the shop.Ill milk.Cau = I went to the shop to buy milk.
[eu]
_jokaera_
= behavior; <span style='color: red'>_jokaeragatik_</span>
= because of behavior.

### Ben: benefactive / destinative

The
benefactive case corresponds to the English preposition _for_.

Examples:
[eu]
_mutil_
= boy;
<span style='color: red'>_mutilarentzat_</span>
= for boys.

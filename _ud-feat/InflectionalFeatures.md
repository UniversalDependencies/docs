---
layout: base
title: 'Inflectional Features'
shortdef: 'this page will be split to individual features'
---

## {{ page.title }}: {{ page.shortdef }}

# Universal Dependencies: Features of Tokens<br />Part 2: Inflectional Features

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



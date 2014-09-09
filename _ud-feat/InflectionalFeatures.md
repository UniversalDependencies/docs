---
layout: base
title: 'Inflectional Features'
shortdef: 'this page will be split to individual features'
---

## {{ page.title }}: {{ page.shortdef }}

# Universal Dependencies: Features of Tokens<br />Part 2: Inflectional Features

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



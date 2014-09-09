---
layout: base
title: 'Aspect'
shortdef: 'aspect'
---

## {{ page.title }}: {{ page.shortdef }}

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

Since we proceed bottom-up, the current proposal
covers only a few aspect values that occurred as feature in
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

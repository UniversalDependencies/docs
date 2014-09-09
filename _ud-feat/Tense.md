---
layout: base
title: 'Tense'
shortdef: 'tense'
---

## {{ page.title }}: {{ page.shortdef }}

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

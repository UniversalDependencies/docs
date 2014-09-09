---
layout: base
title: 'VerbForm'
shortdef: 'form of verb or form on the border between verbs and other parts of speech'
---

## {{ page.title }}: {{ page.shortdef }}

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

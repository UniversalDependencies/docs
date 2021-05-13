---
layout: base
title:  'Statistics of expl:pv in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="sk_snk-dep-expl-pass.html">expl:pass</a></tt>.

2623 nodes (2%) are attached to their parents as `expl:pv`.

1842 instances of `expl:pv` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70186808997331.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (2592; 99% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (27; 1% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Do	do	ADP	Eu2	AdpType=Prep|Case=Gen	3	case	3:case	_
2	vašej	váš	DET	PFfs2	Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	3	det	3:det	_
3	duše	duša	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	5	obl	5:obl:do:gen	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
5	vkráda	vkrádať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	smútok	smútok	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
7	a	a	CCONJ	O	_	8	cc	8:cc	_
8	zatrpknutosť	zatrpknutosť	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	6	conj	5:nsubj|6:conj	SpaceAfter=No
9	.	.	PUNCT	ZIP	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	Meteorológia	meteorológia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	veda	veda	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	_
4	zaoberajúca	zaoberajúci	ADJ	Gkfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	3	amod	3:amod	_
5	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	atmosférou	atmosféra	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	4	obl:arg	4:obl:arg:ins	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl:pv	color:blue
1	Aktom	akt	NOUN	SSis7	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	obl	10:obl:ins	_
2	spojenia	spojenie	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	1	nmod	1:nmod:gen	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	s	s	ADP	Eu7	AdpType=Prep|Case=Ins	6	case	6:case	_
5	takouto	takýto	DET	PFfs7	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	6	det	6:det	_
6	bytosťou	bytosť	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	2	nmod	2:nmod:s:ins	_
7	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	10	expl:pv	10:expl:pv	_
8	šaman	šaman	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
9	vlastne	vlastne	PART	T	_	10	advmod	10:advmod	_
10	dostáva	dostávať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
11	na	na	ADP	Eu4	AdpType=Prep|Case=Acc	12	case	12:case	_
12	úroveň	úroveň	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	10	obl	10:obl:na:acc	_
13	božských	božský	ADJ	AAmp2x	Animacy=Anim|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	14	amod	14:amod	_
14	tvorcov	tvorca	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	12	nmod	12:nmod:gen	SpaceAfter=No
15	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~



---
layout: base
title:  'Statistics of nsubj:outer in UD_Tu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Tu-GDUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="mjg_gdud-dep-nsubj.html">nsubj</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="mjg_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mjg_gdud-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="mjg_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mjg_gdud-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:outer	color:blue
1	te	_	PRON	_	Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
2	ɢoilo-dɵ	_	NUM	_	Case=Dat|NumType=Card	6	obl	_	_
3	muɕigu	_	ADJ	_	_	4	amod	_	_
4	sarare	_	NOUN	_	_	6	obl:tmod	_	_
5	buliː-ŋgɜ	_	NOUN	_	_	6	nsubj:outer	_	Case=Sig
6	ire-dʑ-a	_	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 nsubj:outer	color:blue
1	nɵmbaː	nɵmbaː	INTJ	_	_	3	discourse	_	_
2	ndaː	ndaː	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	ʋai	ʋai	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
4	da	da	CCONJ	_	_	3	cc	_	_
5	munɵ	munɵ	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	tɕaz	tɕaz	NOUN	_	Number=Sing	8	nsubj	_	_
7	an&iː	an&iː	ADV	_	PronType=Int	8	advmod	_	_
8	ʋai-gu-nɵ	ʋai	VERB	_	Aspect=Imp	3	conj	_	_
9	da	da	CCONJ	_	_	3	cc	_	_
10	bu	bu	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj:outer	_	_
11	liː	liː	PART	_	Polarity=Neg	3	advmod	_	_
12	mude-nɵ	mude	VERB	_	Mood=Ind|VerbForm=Fin	3	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~



---
layout: base
title:  'Statistics of parataxis:trans in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `parataxis:trans`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="qtd_sagt-dep-parataxis-discourse.html">parataxis:discourse</a></tt>.

43 nodes (0%) are attached to their parents as `parataxis:trans`.

36 instances of `parataxis:trans` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.13953488372093.

The following 18 pairs of parts of speech are connected with `parataxis:trans`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (18; 42% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (4; 9% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis:trans	color:blue
1	Die	der	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	5	nsubj	_	CSID=DE|Lang=de
2	haben	haben	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	CSID=DE|Lang=de
3	mich	ich	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	CSID=DE|Lang=de
4	nicht	nicht	PART	_	Polarity=Neg	5	advmod	_	CSID=DE|Lang=de
5	angenommen	annehmen	VERB	_	VerbForm=Part	0	root	_	CSID=DE|Lang=de|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	CSID=OTHER
7	ya	ya	INTJ	_	_	8	discourse	_	CSID=TR|Lang=tr
8	almadılar	al	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	5	parataxis:trans	_	CSID=TR|Lang=tr
9	beni	ben	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obj	_	CSID=TR|Lang=tr|SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:trans	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	CSID=TR|Lang=tr
2	güzel	güzel	ADJ	_	_	3	advmod	_	CSID=TR|Lang=tr
3	konuşuyor	konuş	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	CSID=TR|Lang=tr
4	einfach	einfach	ADJ	_	_	7	advmod	_	CSID=DE|Lang=de
5	richtig	richtig	ADJ	_	_	6	compound:redup	_	CSID=DE|Lang=de
6	richtig	richtig	ADJ	_	_	7	advmod	_	CSID=DE|Lang=de
7	gut	gut	ADJ	_	_	3	parataxis:trans	_	CSID=DE|Lang=de|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis:trans	color:blue
1	Richtig	richtig	ADV	_	_	2	advmod	_	CSID=DE|Lang=de
2	gut	gut	ADJ	_	_	0	root	_	CSID=DE|Lang=de
3	çok	çok	ADV	_	_	4	advmod	_	CSID=TR|Lang=tr
4	güzel	güzel	ADJ	_	_	2	parataxis:trans	_	CSID=TR|Lang=tr|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	CSID=OTHER

~~~



---
layout: base
title:  'Statistics of parataxis:trans in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `parataxis:trans`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="qtd_sagt-dep-parataxis-discourse.html">parataxis:discourse</a></tt>.

36 nodes (0%) are attached to their parents as `parataxis:trans`.

26 instances of `parataxis:trans` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91666666666667.

The following 15 pairs of parts of speech are connected with `parataxis:trans`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (14; 39% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (3; 8% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis:trans	color:blue
1	Die	der	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	5	nsubj	_	LangID=DE
2	haben	haben	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	LangID=DE
3	mich	ich	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	LangID=DE
4	nicht	nicht	PART	_	Polarity=Neg	5	advmod	_	LangID=DE
5	angenommen	annehmen	VERB	_	VerbForm=Part	0	root	_	LangID=DE|SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	LangID=OTHER
7	ya	ya	INTJ	_	_	8	discourse	_	LangID=TR
8	almadılar	al	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past	5	parataxis:trans	_	LangID=TR
9	beni	ben	NOUN	_	Case=Acc|Number=Sing	8	obj	_	LangID=TR|SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 parataxis:trans	color:blue
1	Aha	aha	INTJ	_	_	2	discourse	_	LangID=TR
2	bak	bak	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	LangID=TR
3	bu	bu	PRON	_	Case=Nom|Number=Sing	5	det	_	LangID=TR
4	bizim	biz	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	LangID=TR
5	at	at	NOUN	_	Case=Nom|Number=Sing	2	conj	_	LangID=TR
6	shadow	shadow	NOUN	_	Foreign=Yes	7	nmod	_	LangID=LANG3
7	man	man	NOUN	_	Foreign=Yes	8	parataxis:trans	_	LangID=LANG3
8	Schattenmähne	Schattenmähne	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	appos	_	LangID=DE|SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:trans	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	LangID=TR
2	güzel	güzel	ADJ	_	_	3	advmod	_	LangID=TR
3	konuşuyor	konuş	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	LangID=TR
4	einfach	einfach	ADJ	_	_	7	advmod	_	LangID=DE
5	richtig	richtig	ADJ	_	_	6	compound:redup	_	LangID=DE
6	richtig	richtig	ADJ	_	_	7	advmod	_	LangID=DE
7	gut	gut	ADJ	_	_	3	parataxis:trans	_	LangID=DE|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~



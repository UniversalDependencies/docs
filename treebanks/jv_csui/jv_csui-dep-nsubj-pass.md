---
layout: base
title:  'Statistics of nsubj:pass in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="jv_csui-dep-nsubj-outer.html">nsubj:outer</a></tt>.

176 nodes (1%) are attached to their parents as `nsubj:pass`.

172 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.72159090909091.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (81; 46% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (67; 38% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt> (22; 13% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (4; 2% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Mau	_	ADV	_	Polite=Infm|PronType=Dem	4	advmod	_	_
2	anak	_	NOUN	_	Number=Sing	4	nsubj:pass	_	_
3	mu	_	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	2	nmod:poss	_	_
4	turokna	_	VERB	_	Mood=Irr|Polite=Infm|Voice=Pass	0	root	_	_
5	neng	_	ADP	_	Polite=Infm	6	case	_	_
6	kamar	_	NOUN	_	Number=Sing	4	obl	_	SpaceAfter=No
7	,	_	PUNCT	_	_	4	punct	_	_
8	ora	_	PART	_	Polarity=Neg|Polite=Infm	9	advmod	_	_
9	kebribinen	_	VERB	_	Mood=Ind|Voice=Pass	4	advcl	_	SpaceAfter=No
10	.	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Panjenenganipun	_	PRON	_	Number=Sing|Person=3|Polite=Elev|PronType=Prs	2	nsubj:pass	_	_
2	miyos	_	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	0	root	_	_
3	kanthi	_	ADP	_	Polite=Infm	4	case	_	_
4	asma	_	NOUN	_	Number=Sing|Polite=Elev	2	obl	_	_
5	asli	_	ADJ	_	_	4	amod	_	_
6	Joko	_	PROPN	_	_	4	nmod	_	_
7	Widodo	_	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Raden	_	PROPN	_	_	3	nsubj:pass	_	_
2	Gathotkaca	_	PROPN	_	_	1	flat:name	_	_
3	kaparingan	_	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	0	root	_	_
4	pusaka	_	NOUN	_	Number=Sing	3	obl	_	_
5	dening	_	ADP	_	Polite=Infm	7	case	_	_
6	ingkang	_	DET	_	Definite=Def|Polite=Form|PronType=Art	7	det	_	_
7	Rama	_	PROPN	_	_	3	obl	_	SpaceAfter=No
8	.	_	PUNCT	_	_	3	punct	_	_

~~~



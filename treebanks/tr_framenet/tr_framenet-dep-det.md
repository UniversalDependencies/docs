---
layout: base
title:  'Statistics of det in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `det`

This relation is universal.

765 nodes (4%) are attached to their parents as `det`.

765 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08366013071895.

The following 14 pairs of parts of speech are connected with `det`: <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (644; 84% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (49; 6% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (21; 3% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	Son	son	ADJ	_	_	2	amod	_	_
2	sürat	sürat	NOUN	_	Case=Nom|Number=Sing	3	advcl	_	_
3	giden	git	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	4	acl	_	_
4	araba	araba	NOUN	_	Case=Nom|Number=Sing	12	nsubj	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	önüne	ön	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
7	geyik	geyik	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
8	çıkınca	çık	VERB	_	Polarity=Pos|VerbForm=Conv	12	advcl	_	_
9	bir	bir	DET	_	Definite=Ind|PronType=Art	10	det	_	_
10	anda	an	NOUN	_	Case=Loc|Number=Sing	12	obl	_	_
11	çark	çark	NOUN	_	Case=Nom|Number=Sing	12	compound	_	_
12	etti	et	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
1	Senin	sen	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	nmod	_	_
2	okulun	okul	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	7	obl	_	_
3	için	için	ADP	_	_	2	case	_	_
4	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	det	_	_
5	kadar	kadar	ADP	_	_	4	case	_	_
6	masraf	masraf	NOUN	_	Case=Nom|Number=Sing	7	compound	_	_
7	ettik	et	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Her	her	DET	_	Definite=Def|PronType=Ind	2	det	_	_
2	söylediğimize	söyle	VERB	_	Aspect=Perf|Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Vnoun	10	obl	_	_
3	armudun	armut	NOUN	_	Case=Gen|Number=Sing	4	compound	_	_
4	sapı	sap	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	compound	_	_
5	var	var	ADJ	_	_	7	compound	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	üzümün	üzüm	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	8	compound	_	_
8	çöpü	çöp	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	compound	_	_
9	var	var	ADJ	_	_	10	ccomp	_	_
10	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~



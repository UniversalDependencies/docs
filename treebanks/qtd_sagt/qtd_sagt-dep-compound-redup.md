---
layout: base
title:  'Statistics of compound:redup in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="qtd_sagt-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="qtd_sagt-dep-compound-prt.html">compound:prt</a></tt>.

49 nodes (0%) are attached to their parents as `compound:redup`.

29 instances of `compound:redup` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04081632653061.

The following 9 pairs of parts of speech are connected with `compound:redup`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (13; 27% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (10; 20% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (9; 18% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (8; 16% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (4; 8% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt> (2; 4% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="qtd_sagt-pos-X.html">X</a></tt>-<tt><a href="qtd_sagt-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:redup	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	CSID=TR|Lang=tr
2	Amazon'da	Amazon	PROPN	_	Case=Loc|Number=Sing	6	obl	_	CSID=MIXED|CSPoint=Amazon§'da|Lang=qtd
3	sayfalardan	sayfa	NOUN	_	Case=Abl|Number=Plur	4	nmod	_	CSID=TR|Lang=tr
4	sayfaya	sayfa	NOUN	_	Case=Dat|Number=Sing	6	obl	_	CSID=TR|Lang=tr
5	atlaya	atla	VERB	_	VerbForm=Conv	6	compound:redup	_	CSID=TR|Lang=tr
6	atlaya	atla	VERB	_	VerbForm=Conv	7	advcl	_	CSID=TR|Lang=tr
7	buluyorum	bul	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	CSID=TR|Lang=tr|SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	Çok	çok	DET	_	_	2	det	_	CSID=TR|Lang=tr
2	efsane	efsane	NOUN	_	Case=Nom|Number=Sing	3	xcomp	_	CSID=TR|Lang=tr
3	olmuş	ol	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	CSID=TR|Lang=tr
4	ya	ya	INTJ	_	_	3	discourse	_	CSID=TR|Lang=tr
5	Batman	Batman	PROPN	_	Foreign=Yes	8	nsubj	_	CSID=LANG3|Lang=en
6	pizza	pizza	NOUN	_	Case=Nom|Number=Sing	8	obj	_	CSID=TR|Lang=tr
7	mizza	pizza	NOUN	_	Case=Nom|Number=Sing|Typo=Yes	6	compound:redup	_	CSID=TR|Lang=tr|CorrectForm=pizza
8	yiyor	ye	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	parataxis	_	CSID=TR|Lang=tr
9	schon	schon	ADV	_	_	10	advmod	_	CSID=DE|Lang=de
10	cool	cool	ADJ	_	_	8	conj	_	CSID=DE|Lang=de|SpaceAfter=No
11	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound:redup	color:blue
1	Çok	çok	ADV	_	_	2	advmod	_	CSID=TR|Lang=tr
2	güzel	güzel	ADJ	_	_	3	advmod	_	CSID=TR|Lang=tr
3	konuşuyor	konuş	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	CSID=TR|Lang=tr
4	einfach	einfach	ADJ	_	_	7	advmod	_	CSID=DE|Lang=de
5	richtig	richtig	ADJ	_	_	6	compound:redup	_	CSID=DE|Lang=de
6	richtig	richtig	ADJ	_	_	7	advmod	_	CSID=DE|Lang=de
7	gut	gut	ADJ	_	_	3	parataxis:trans	_	CSID=DE|Lang=de|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	CSID=OTHER

~~~



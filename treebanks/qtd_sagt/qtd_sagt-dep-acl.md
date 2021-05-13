---
layout: base
title:  'Statistics of acl in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `acl`

This relation is universal.

244 nodes (1%) are attached to their parents as `acl`.

142 instances of `acl` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58196721311475.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (189; 77% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (21; 9% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (9; 4% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 acl	color:blue
1	Peki	peki	ADV	_	_	5	advmod	_	LangID=TR
2	alacağın	al	VERB	_	Aspect=Perf|Case=Nom|Evident=Fh|Mood=Ind|Number=Sing|Number[psor]=Sing|Person[psor]=2|Tense=Fut	3	acl	_	LangID=TR
3	Gehaltla	Gehalt	NOUN	_	Case=Ins|Number=Sing	5	obl	_	CSPoint=Gehalt§la|DeCase=Dat|DeGender=Neut|LangID=MIXED
4	filan	filan	ADV	_	_	5	advmod	_	LangID=TR
5	konuştun	konuş	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	LangID=TR
6	mu	mi	AUX	_	Number=Sing|Person=3	5	aux:q	_	LangID=TR|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 acl	color:blue
1	Hani	hani	ADV	_	_	4	advmod	_	LangID=TR
2	Berlin'e	Berlin	PROPN	_	Case=Dat|Number=Sing	4	obl	_	CSPoint=Berlin§'e|DeCase=Dat|LangID=MIXED
3	falan	falan	ADV	_	_	4	advmod	_	LangID=TR
4	gittik	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Tense=Past	7	acl	_	LangID=TR
5	ya	ya	SCONJ	_	_	4	mark	_	LangID=TR|SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	LangID=OTHER
7	onlardan	o	PRON	_	Case=Abl|Number=Plur|Person=3|PronType=Prs	9	obl	_	LangID=TR
8	biraz	biraz	ADV	_	_	9	advmod	_	LangID=TR
9	bahseder	bahset	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=2|Tense=Pres	0	root	_	LangID=TR
10	misin	mi	AUX	_	Number=Sing|Person=2	9	aux:q	_	LangID=TR|SpaceAfter=No
11	?	?	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Geçen	geçe	ADJ	_	_	2	acl	_	LangID=TR
2	sene	sene	NOUN	_	Case=Nom|Number=Sing	3	obl	_	LangID=TR
3	gitmiştim	git	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Pqp	0	root	_	LangID=TR
4	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	LangID=TR
5	mit	mit	ADP	_	_	7	case	_	LangID=DE
6	meiner	mein	PRON	_	Case=Dat|Gender=Fem|Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod	_	LangID=DE
7	Mutter	Mutter	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	3	obl	_	LangID=DE
8	aber	aber	CCONJ	_	_	12	cc	_	LangID=DE
9	dieses	dies	DET	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	det	_	LangID=DE
10	Jahr	Jahr	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	12	obl	_	LangID=DE
11	wahrscheinlich	wahrscheinlich	ADV	_	_	12	advmod	_	LangID=DE
12	nicht	nicht	PART	_	Polarity=Neg	3	conj	_	LangID=DE|SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~



---
layout: base
title:  'Statistics of obl in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="tr_atis-dep-obl-tmod.html">obl:tmod</a></tt>.

3986 nodes (9%) are attached to their parents as `obl`.

3978 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.39964877069744.

The following 21 pairs of parts of speech are connected with `obl`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2172; 54% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (933; 23% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (424; 11% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (187; 5% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (84; 2% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (54; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (49; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (40; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (9; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	olan	ol	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
6	sabah	sabah	NOUN	_	Case=Nom|Number=Sing	9	obl:tmod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	erken	erken	ADV	_	_	9	advmod	_	_
9	gelir	gel	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl	color:blue
1	Bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	obl	_	_
2	Washington	washington	PROPN	_	Case=Nom|Number=Sing	6	amod	_	_
3	DC'deki	dc	PROPN	_	_	2	flat	_	_
4	tüm	tüm	DET	_	Definite=Def|PronType=Ind	6	det	_	_
5	kara	kara	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	ulaşımını	ulaşım	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	gösterin	göster	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	8	obl	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	en	en	ADV	_	Degree=Sup	5	advmod	_	_
5	az	az	ADJ	_	_	6	amod	_	_
6	bir	bir	NUM	_	NumType=Card	7	nummod	_	_
7	durakla	durak	NOUN	_	Case=Ins|Number=Sing	8	obl	_	_
8	uçmak	uç	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~



---
layout: base
title:  'Statistics of obj in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `obj`

This relation is universal.

495 nodes (4%) are attached to their parents as `obj`.

406 instances of `obj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07474747474747.

The following 19 pairs of parts of speech are connected with `obj`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (241; 49% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (194; 39% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (15; 3% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (10; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	køyrde	køyre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	bøndene	bonde	NOUN	_	Definite=Def|Gender=Masc|Number=Plur	1	nsubj	_	_
3	mjølka	mjølk	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	1	obj	_	_
4	dit	dit	ADV	_	_	1	advmod	_	_
5	med	med	ADP	_	_	6	case	_	_
6	hest	hest	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
7	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	men	men	CCONJ	_	_	3	cc	_	_
2	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	køyrde	køyre	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	med	med	SCONJ	_	_	8	mark	_	_
6	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	månads	månad	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
8	seie	seie	VERB	_	VerbForm=Inf	3	advcl	_	_
9	så	så	ADV	_	_	3	advmod	_	_
10	e	e	X	_	_	3	discourse:filler	_	_
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
1	og	og	CCONJ	_	_	10	cc	_	_
2	da	da	ADV	_	_	5	advmod	_	_
3	#	#	PUNCT	_	_	5	punct	_	_
4	kj-	kj-	X	_	_	5	discourse:filler	_	_
5	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	reparandum	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	Forden	Forden	PROPN	_	_	5	obj	_	_
8	#	#	PUNCT	_	_	10	punct	_	_
9	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	hadde	ha	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
11	Forden	Forden	PROPN	_	_	10	obj	_	_
12	da	da	ADV	_	_	10	advmod	_	_
13	au	au	ADV	_	_	10	advmod	_	_
14	.	$.	PUNCT	_	_	10	punct	_	_

~~~



---
layout: base
title:  'Statistics of punct in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `punct`

This relation is universal.

2154 nodes (16%) are attached to their parents as `punct`.

1507 instances of `punct` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.92293407613742.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (985; 46% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (457; 21% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (272; 13% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (170; 8% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (64; 3% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (62; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (50; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (27; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (25; 1% instances), <tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="no_nynorsklia-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="no_nynorsklia-pos-PART.html">PART</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="no_nynorsklia-pos-X.html">X</a></tt>-<tt><a href="no_nynorsklia-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 punct	color:blue
1	ja	ja	INTJ	_	_	8	discourse	_	_
2	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	3	det	_	_
3	første	første	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	5	advmod	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	begynte	begynne	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	parataxis:deletion	_	_
6	#	#	PUNCT	_	_	8	punct	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
9	#	#	PUNCT	_	_	11	punct	_	_
10	i	i	ADP	_	_	11	case	_	_
11	femogtjue	femogtjue	NUM	_	Number=Plur|NumType=Card	8	obl	_	_
12	.	$.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	ja	ja	INTJ	_	_	0	root	_	_
2	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
1	om	om	ADP	_	_	3	case	_	_
2	om	om	ADP	_	_	3	reparandum	_	_
3	dagen	dag	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
4	#	#	PUNCT	_	_	7	punct	_	_
5	som	som	PRON	_	PronType=Rel	7	obj	_	_
6	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
7	bar	bere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~



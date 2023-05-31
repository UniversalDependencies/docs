---
layout: base
title:  'Statistics of acl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="no_nynorsklia-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="no_nynorsklia-dep-acl-relcl.html">acl:relcl</a></tt>.

94 nodes (0%) are attached to their parents as `acl`.

93 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.73404255319149.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (62; 66% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (14; 15% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (6; 6% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	og	og	CCONJ	_	_	4	cc	_	_
2	så	så	ADV	_	_	4	advmod	_	_
3	#	#	PUNCT	_	_	2	punct	_	_
4	vart	verte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
6	da	da	ADV	_	_	4	advmod	_	_
7	spørsmål	spørsmål	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	xcomp	_	_
8	om	om	SCONJ	_	_	10	mark	_	_
9	å	å	PART	_	_	10	mark	_	_
10	slakte	slakte	VERB	_	VerbForm=Inf	7	acl	_	_
11	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	gammalhest	gammalhest	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	obj	_	_
13	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl	color:blue
1	mm	mm	INTJ	_	_	3	discourse	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	liker	like	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	veldig	veldig	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	6	advmod	_	_
6	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	advmod	_	_
7	å	å	PART	_	_	8	mark	_	_
8	teikne	teikne	VERB	_	VerbForm=Inf	4	acl	_	_
9	og	og	CCONJ	_	_	10	cc	_	_
10	sånn	sånn	ADV	_	_	8	conj	_	_
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	nei	nei	INTJ	_	_	3	discourse	_	_
2	det	det	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	ikkje	ikkje	PART	_	Polarity=Neg	3	advmod	_	_
6	så	så	CCONJ	_	_	8	cc	_	_
7	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	ser	sjå	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	conj	_	_
9	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
10	ikkje	ikkje	PART	_	Polarity=Neg	8	advmod	_	_
11	mykje	mykje	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	acl	_	_
12	på	på	ADP	_	_	8	compound:prt	_	_
13	.	$.	PUNCT	_	_	3	punct	_	_

~~~



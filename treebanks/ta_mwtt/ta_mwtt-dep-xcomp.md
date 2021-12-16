---
layout: base
title:  'Statistics of xcomp in UD_Tamil-MWTT'
udver: '2'
---

## Treebank Statistics: UD_Tamil-MWTT: Relations: `xcomp`

This relation is universal.

4 nodes (0%) are attached to their parents as `xcomp`.

4 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt>-<tt><a href="ta_mwtt-pos-VERB.html">VERB</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	குமார்	குமார்	PROPN	_	Case=Nom|Number=Sing|Person=3|Polite=Form	3	nsubj	_	Translit=kumār|LTranslit=kumār
2	மாணவன்	மாணவன்	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Form	3	xcomp	_	Translit=māṇavaṉ|LTranslit=māṇavaṉNot an 'obj'
3	ஆனான்	ஆகு	VERB	_	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=āṉāṉ|LTranslit=āku
4	.	.	PUNCT	_	PunctType=Peri	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 xcomp	color:blue
1	இவ்வளவு	இவ்வளவு	ADV	_	_	3	advmod	_	Translit=ivvaḷavu|LTranslit=ivvaḷavu
2	நான்	நான்	PRON	_	Animacy=Anim|Case=Nom|Gender=Com|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Translit=nāṉ|LTranslit=nāṉ
3	சாப்பிட	சாப்பிடு	VERB	_	VerbForm=Inf	5	xcomp	_	Translit=cāppiṭa|LTranslit=cāppiṭu
4	முடியவே	முடி	VERB	_	VerbForm=Inf	5	compound:redup	_	Translit=muṭiyavē|LTranslit=muṭi
5	முடியாது	முடி	VERB	_	Polarity=Neg	0	root	_	Translit=muṭiyātu|LTranslit=muṭi
6	.	.	PUNCT	_	PunctType=Peri	5	punct	_	Translit=.|LTranslit=.

~~~



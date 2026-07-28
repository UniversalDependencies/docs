---
layout: base
title:  'Statistics of xcomp in UD_Ruuli-RDT'
udver: '2'
---

## Treebank Statistics: UD_Ruuli-RDT: Relations: `xcomp`

This relation is universal.

137 nodes (2%) are attached to their parents as `xcomp`.

136 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21167883211679.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (125; 91% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt>-<tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="ruc_rdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ruc_rdt-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ruc_rdt-pos-PRON.html">PRON</a></tt>-<tt><a href="ruc_rdt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Kiwuka	kiwuka	NOUN	_	NounClass=Bantu7	2	nsubj	2:nsubj|3:nsubj|4:nsubj:xsubj	Gloss=7.virus|MSeg=kiwuka
2	ki	ki	PRON	_	PronType=Int	0	root	0:root	Gloss=what|MSeg=ki
3	ekikusinga	singa	VERB	REL	Aspect=Prog|Mood=Ind|NounClass=Bantu7|Person=3|Referent=Yes|Tense=Pres|VerbForm=Fin	1	acl:relcl	1:acl:relcl	Gloss=S.REL-7S-PROG-exceed|MSeg=e-ki-ku-sing
4	okuba	bba	VERB	COP	Referent=Yes|VerbForm=Inf	3	xcomp	3:xcomp	Gloss=AUG-INF-COP|MSeg=o-ku-bba
5	ekibbi	kibbi	NOUN	_	NounClass=Bantu7|Referent=Yes	4	obj	4:obj	Gloss=AUG-7.evil|MSeg=e-kibbi|SpaceAfter=No
6	?	?	PUNCT	_	_	2	punct	2:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	kale	kale	INTJ	_	_	2	discourse	2:discourse	Gloss=well|MSeg=kale
2	kyabba	bba	VERB	COP	Mood=Ind|NounClass=Bantu7|Person=3|Tense=Fut|VerbForm=Fin	0	root	0:root	Gloss=7S-FUT-COP|MSeg=ki-a-bba
3	kisai	sai	ADJ	_	NounClass=Bantu7	2	xcomp	2:xcomp	Gloss=7-good|MSeg=ki-sai
4	muno	muno	ADV	_	_	2	advmod	2:advmod	Gloss=much|MSeg=muno|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	naye	naye	CCONJ	_	_	4	cc	4:cc	Gloss=but|MSeg=naye
2	enaku	naku	NOUN	_	NounClass=Bantu10|Referent=Yes	4	obl	4:obl	Gloss=AUG-10.day|MSeg=e-naku
3	zini	ni	DET	_	Deixis=Prox|NounClass=Bantu10|PronType=Dem	2	det	2:det	Gloss=10.PROX|MSeg=zini
4	ebyabbanga	bba	VERB	REL-COP	Aspect=Hab|Mood=Ind|NounClass=Bantu8|Person=3|Referent=Yes|Tense=Past|VerbForm=Fin	0	root	0:root	Gloss=S.REL-8S-PST-COP-HAB|MSeg=e-bi-a-bba-nga
5	ebigega	kigega	NOUN	_	NounClass=Bantu8|Referent=Yes	4	xcomp	4:xcomp	Gloss=AUG-8.basket|MSeg=e-bigega|SpacesAfter=\n

~~~



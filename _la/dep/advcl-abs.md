---
layout: relation
title: 'advcl:abs'
shortdef: 'ablativus absolutus'
udver: '2'
---

The *ablativus absolutus* 'ablative absolute' (or the "seventh case" in some ancient grammatical treatises) is the Latin version of so-called absolute constructions, which are a common phenomenon in Indo-European languages, especially in ancient ones (but can be based on other [cases](la-feat/Case), such as genitive, locative, and so on). In its most widespread form, it is also an instance of those which have been called "dominant participles" (Pinkster 1990).

An ablative absolute is an embedded adverbial clause which consists of a nominal element, acting as the predicate, and its subject, both taking the ablative case. Most of the time, the predicative nominal element is the [participial form](la-feat/VerbForm) of a verb (the "dominant participle"), and then it agrees in [gender](la-feat/Gender) and [number](la-feat/Number) with the subject. However, an *ablativus absolutus* can also consist of a non-verbal predication, the copula then not being expressed (not least because the Latin [copula](la-dep/cop) does not possess participial forms), so that the construction appears to be made up of two juxtaposed nominals. Usually there are no other arguments in the absolute construction apart from these two. The fact that both elements are in the ablative case is an example of non-canonical subject agreement (Nikitina and Haug 2016): canonically, we would expect the [subject](la-dep/nsubj) to be in the nominative case, and the participial form to not necessarily agree with it in case. 

The "absoluteness" of this construction manifests itself in the choice of the ablative, which is an oblique (i.e. not core) case, and in the fact that its subject is never co-referent to an argument of the main clause. In the latter case, non-finite (adverbial or complemental) clauses are traditionally called "secondary predications" (usually of subject or object) or "conjoined participles" (it. *participio congiunto*), and appear in the respective cases of the involved arguments (usually nominative or accusative); we treat them with a different specific subrelation (used in [`advcl:pred`](la-dep/advcl-pred) and [`xcomp:pred`](la-dep/xcomp-pred)). We observe that the semantic character (e.g. temporal, causal, ...) of such embedded adverbial clauses remains underspecified by their very nature.

One can notice that the *ablativus absolutus*, together with its peculiar agreement strategy, is actually just one possible type of embedded, dependent, non-finite clause, taking the case required by its context, here the ablative corresponding to an oblique argument. [Gerundives](la-feat/VerbForm), for example, often appear in similar constructions, so that we might observe somethng like *suspicio regni adpetendi* 'the suspicion of kingship being striven for', where in *regni adpetendi* (in a possible finite form: *regnum adpetiturum est* 'kingship will be striven for') the shared case is the genitive, *regnum* 'kingship' is the [passive subject](la-dep/nsubj-pass) of the gerundive and the whole acts as a [clausal modifier](la-dep/acl) to *suspicio* 'suspicion'. Similarly, we observe *suspicio acceptae pecuniae* 'the suspicion of money having been accepted' (possible finite form: *pecunia accepta est*) with a perfect participle, again in the genitive case (Pinkster 1990). However, given its iconicity and distinctive distribution, we mark only the *ablativus absolutus* with a specific subrelation out of this family of constructions.           

The distribution of [voice](la-feat/Voice) and [aspect](la-feat/Aspect) in the system of Latin participles (in particular the lack of a perfective, morphologically active participle) has as a consequence that the majority *ablativi absoluti* are expressed in a passive form. Over time, especially for what concerns the gerundive, such constructions have also been reanalyized (if not syntactically, at least from a semantical point of view) as active (giving rise to new similar, active constructions in Romance languages), and this can sometimes be observed explicitly in Late and Medieval Latin text. In any case, it is preferable to retain the "original" passive connotation in the syntactic annotation as far as this is possible (which is usually the case).

In the following examples, the corresponding passage in each translation is highlighted.

~~~ sdparse
Manifestum sit omnibus vobis quod , existente me Mantue , questio quedam exorta est , que dilatrata multotiens ad apparentiam magis quam ad veritatem , indeterminata restabat . \n Manifest be-it all to-ye that , existing me in-Mantua , issue certain sprung-up is , which delayed many-times to appearance more than to truth , undetermined remained .
advcl:abs(Manifestum,existente)
nsubj(existente,me-8)
obl(existente,Mantue)
advcl:abs(Manifest,existing)
nsubj(existing,me-37)
obl(existing,in-Mantua)
~~~

'Be it known to you all that **when I was in Mantua** a certain discussion arose, which, following the appearance rather than truth, received manifold expansion, but remained undecided.' (*Questio de aqua et terra*, UDante)

~~~ sdparse
+ In nomine domini nostri Iesu Christi regnante domno nostro Hkarolomanno piissimo rege , anno regni eius postquam , Deo propitio , in Italia ingressus est primo , septimo idus iunii , indictione undecima . \n + In name of-lord our Jesus Christ reigning lord our Carolomannus most-pious king , in-year of-reign of-him after-that , God favourable , in Italy entered is firstly , seventh ides of-June , indiction eleventh .
advcl:abs(anno,regnante)
nsubj(regnante,domno)
flat(domno,Hkarolomanno)
appos(domno,rege)
advcl:abs(anno,propitio)
nsubj(propitio,Deo)
advcl:abs(in-year,reigning)
nsubj(reigning,lord)
flat(lord,Carolomannus)
appos(lord,king)
advcl:abs(in-year,favourable)
nsubj(favourable,God)
~~~

'\+ In the name of our lord Jesus Christ, **under the reign of our lord Carolomannus, most pious king**, in the year of his rule after he entered Italy for the first time **as God favoured [him]**, at the seventh *ides* of June, during the eleventh indiction.' (LLCT)

* Note: *anno* 'in the year' (oblique) is promoted to `root` because there is no predicate.

~~~ sdparse
Verum quia nonnulla regalium clausularum videbatur hortari ut , si quando nuntiorum facultas adesset , Celsitudini regie aliquid peroptando de status mei conditione referrem , quamvis quedam presumptionis facies interdicat , obedientie tamen suadente virtute obediam . \n Truly because certain regal of-small-sentences was-seen to-exhort that , if when of-legates capability be-there , to-Highness royal something being-desired about status my of-condition I-refer , as-much some of-presumption face impede , of-obedience therefore urging virtue I-obey . 
advcl:abs(referrem,peroptando)
advcl:abs(obediam,suadente)
nsubj(suadente,virtute)
nmod(virtute,obedientie)
advcl:abs(I-refer,being-desired)
advcl:abs(I-obey,urging)
nsubj(urging,virtue)
nmod(virtue,of-obedience)
~~~

'But since some of the regal sentences sounded as encouragement to refer to His royal Highness, had I ever legates at my disposal and **if so desired**, something about my current situation, although some kind of presumption would forbid it, nonetheless I will obey, **virtue obliging [me]**.' (*De Monarchia*, UDante)

[It. 'Ma poiché taluna delle frasi regali pareva esortare a riferire, se mai capitasse di disporre di messaggeri, alla regale Altezza qualcosa, **desiderandolo**, sulla condizione del mio stato, sebbene una certa qual parvenza di presunzione ne faccia ostacolo, tuttavia obbedirò **alla suadente virtù dell'obbedienza**.']

* The semantic interpretation of the *ablativus absolutus* of *peroptando* 'going to be very much desired' (translated as 'if so desired') strongly favours an active reading, despite the passive form of the verb and a possible impersonal interpretation ('if so desired').

~~~ sdparse
Nos vero omnes , revelata facie gloriam domini speculantes , in eandem imaginem transformamur . \n We truly all , revealed with-face glory of-lord beholding , in the-same image we-are-transformed .
advcl:abs(speculantes,revelata)
nsubj:pass(revelata,facie)
advcl:abs(beholding,revealed)
nsubj:pass(revealed,with-face)
~~~

'But we all beholding the glory of the Lord **with open face**, are transformed into the same image.' (*Summa contra Gentiles* citing 2 Cor. 3:18, ITTB)


### References

* Pinkster, H. (1990). *Latin syntax and semantics*, Routledge.
* Nikitina, T., Haug, D. T. T. (2016). *Syntactic nominalization in Latin: a case of non-canonical subject agreement*, Transactions of the Philological Society, 114:1, 25–50.
<!-- Interlanguage links updated St lis 3 20:58:34 CET 2021 -->

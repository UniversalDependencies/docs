---
---

var Collections = (function(window, undefined) {
    /*
     * Listing of all the collections and documents. Generated
     * automatically by Jekyll and used e.g for the auto-linking
     * feature. Don't edit this file unless you are sure what you are
     * doing.
     */
    var listing = {
	{% for c in site.collections %}
        "{{ c.label }}": [{% for d in c.docs %}
            {
                "title": "{{ d.title }}",
                "url":   "{{ site.baseurl }}{{ d.url }}",
            },{% endfor %}
        ],
{% endfor %}
    };

    return {
        listing: listing,
    };
})(window);

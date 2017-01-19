module.exports = 
  access_token: 'c6623beeab3a4466e30cbbddfbcdf345f9b7275365df7c8582de5d2396ff5884'
  management_token: 'bcf11c731a802a4ecd46d389a68b45610e6843924a6906be09ae91a3da253056'
  space_id: 'dq2svaygq90q'
  content_types:                # remove these object braces once the config below is filled out
     projects:                          # data will be made available through this key on the `contentful` object in your templates
       id: 'project'                    # ID of your content type
       filters: {}                   # passes filters to the call to contentful's API, see contentful's docs for more info
    #   template: 'path/to/template'  # if present a single page view will be created for each entry in the content type
    #   path: (entry) ->              # override function for generating single page file path, passed in the entry object

Pipe JSON to prettyj on the command line to receive formatted JSON to stdout.

## Setup
  
    npm install -g prettyj

## Examples   

`echo` example
  
    echo '{"foo": "bar"}' | prettyj
    
    {
        "foo": "bar"
    }
    
`cat` example

    cat filename.json | prettyj    
    
`curl` example

    curl http://example.com/filename.json | prettyj
    

## Testing

There is only one test case and it's rather sloppy.

Since prettyj has < 20 lines of code and no dependencies you might just see for yourself.
